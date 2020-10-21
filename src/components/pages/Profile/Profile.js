import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, Form, Input, Button, Alert } from 'antd';
import * as yup from 'yup';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

import profileSchema from './profileSchema';
import { getProfile, editProfile } from '../../../state/actions/profileActions';

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

function Profile({ getProfile, editProfile, profile }) {
  const { authState } = useOktaAuth();
  const history = useHistory();

  // Initial data

  const initialFormData = {
    contactName: '',
    contactPhone: '',
    email: '',
    address: '',
    country: '',
    organizationName: '',
    organizationWebsite: '',
  };

  const initialErrors = {
    contactName: '',
    contactPhone: '',
    email: '',
    address: '',
    country: '',
    organizationName: '',
    organizationWebsite: '',
  };

  // States

  const [formErrors, setFormErrors] = useState(initialErrors);
  const [formData, setFormData] = useState(initialFormData);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // load profile info
  useEffect(() => {
    getProfile(authState);
  }, [getProfile, authState]);

  // Update the state when profile data is loaded
  useEffect(() => {
    const { id, type, ...profileData } = profile;
    setFormData({
      ...profileData,
    });
  }, [profile, setFormData]);

  // Check form validity on every change, enable/disable the submit button
  useEffect(() => {
    yup
      .reach(profileSchema)
      .validate(formData)
      .then(valid => {
        setSubmitDisabled(false);
      })
      .catch(err => {
        setSubmitDisabled(true);
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

  const handleSubmit = event => {
    event.preventDefault();
    editProfile(authState, formData, history);
  };

  // Checks the validity of an input field
  const checkField = field => {
    yup
      .reach(profileSchema, field.id)
      .validate(field.value)
      .then(valid => {
        setFormErrors({ ...formErrors, [field.id]: '' });
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [field.id]: err.errors[0] });
      });
  };

  return (
    <div>
      <Title>Profile</Title>
      <div className="errors">
        <Form {...errorLayout}>
          <Form.Item>
            {Object.keys(formErrors)
              .filter(error => formErrors[error])
              .map((error, key) => {
                return (
                  <Alert
                    message={formErrors[error]}
                    key={key}
                    type="error"
                    closable
                  />
                );
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
            id="organizationName"
            value={formData.organizationName}
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
            id="email"
            value={formData.email}
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

const mapStateToProps = ({ profile: { profile } }) => {
  return { profile };
};

export default connect(mapStateToProps, { getProfile, editProfile })(Profile);
