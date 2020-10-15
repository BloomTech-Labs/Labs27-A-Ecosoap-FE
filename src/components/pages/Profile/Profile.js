import React, { useState, useEffect } from 'react';
import { Typography, Form, Input, Button, Alert } from 'antd';
import * as yup from 'yup';

import profileSchema from './profileSchema';

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

function Profile() {
  // Initial data

  const initialFormData = {
    contactName: 'Jamie',
    contactPhone: '12345678',
    contactEmail: 'example@example.com',
    organization: 'Company Inc.',
    address: '123 St. NE',
    country: 'US',
    organizationWebsite: 'example.com',
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

  function handleFormCancel(event) {
    setFormData(initialFormData);
    setFormErrors(initialErrors);
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
          <Button type="default" onClick={handleFormCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Profile;
