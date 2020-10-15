import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography, Form, Input, Button, Alert } from 'antd';
import * as yup from 'yup';
import jwt from 'jsonwebtoken';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

import profileSchema from './profileSchema';
import { getProfile } from '../../../state/actions/profileActions';

// Ant styling

const { Title } = Typography;

const profileFormLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 7 },
};

const submitLayout = {
  wrapperCol: { offset: 3 },
};

const errorLayout = {
  wrapperCol: { offset: 3, span: 7 },
};

function Profile(props) {
  const { authState } = useOktaAuth();

  // Initial data

  const initialFormData = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    organization: '',
    address: '',
    country: '',
    organizationWebsite: '',
  };

  const initialErrors = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    organization: '',
    address: '',
    country: '',
    organizationWebsite: '',
  };

  // States

  const [formErrors, setFormErrors] = useState(initialErrors);
  const [formData, setFormData] = useState(initialFormData);
  const [submitDisabled, setSubmitDisabled] = useState('disabled');

  // load profile info
  useEffect(() => {
    const decoded = jwt.decode(authState.idToken);
    const profileId = decoded.sub;
    props.getProfile(authState, profileId);
  }, []);

  // Update the state when profile data is loaded
  useEffect(() => {
    setFormData({
      ...formData,
      contactEmail: props.profile.profile.email, // ### TEMP
      contactName: props.profile.profile.name, // ### TEMP
    });
  }, [props.profile.profile]);

  // Check form validity on every change, enable/disable the submit button
  useEffect(() => {
    yup
      .reach(profileSchema)
      .validate(formData)
      .then(valid => {
        setSubmitDisabled('');
      })
      .catch(err => {
        setSubmitDisabled('disabled');
      });
  }, [formData]);

  function inputChangeHandler(event) {
    const field = event.target;

    // sync with state
    setFormData({
      ...formData,
      [field.id]: field.value,
    });

    // check if valid
    checkField(field);
  }

  function handleSubmit(event) {
    console.log('submit handler');
  }

  // Checks the validity of an input field
  function checkField(field) {
    yup
      .reach(profileSchema, field.id)
      .validate(field.value)
      .then(valid => {
        setFormErrors({ ...formErrors, [field.id]: '' });
        setSubmitDisabled('');
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [field.id]: err.errors[0] });
        setSubmitDisabled('disabled');
      });
  }

  return (
    <div>
      <Title>Profile</Title>
      <div className="errors">
        <Form {...errorLayout}>
          <Form.Item>
            {Object.keys(formErrors).map((error, key) => {
              if (formErrors[error]) {
                return (
                  <Alert
                    message={formErrors[error]}
                    key={key}
                    type="error"
                    closable
                  />
                );
              }
            })}
          </Form.Item>
        </Form>
      </div>
      <Form {...profileFormLayout} className="purchaseForm">
        <Form.Item label="Contact name:">
          <Input
            id="contactName"
            value={formData.contactName}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Organization:">
          <Input
            id="organization"
            value={formData.organization}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Website:">
          <Input
            id="organizationWebsite"
            value={formData.organizationWebsite}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Contact phone:">
          <Input
            id="contactPhone"
            value={formData.contactPhone}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Contact e-mail:">
          <Input
            id="contactEmail"
            value={formData.contactEmail}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Address:">
          <Input
            id="address"
            value={formData.address}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Country:">
          <Input
            id="country"
            value={formData.country}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item {...submitLayout}>
          <Button
            type="primary"
            disabled={submitDisabled}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  const { profile } = state;
  return { profile };
}

export default connect(mapStateToProps, { getProfile })(Profile);
