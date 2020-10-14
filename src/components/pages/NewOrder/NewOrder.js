import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Typography, Input, Button, Form, Alert } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

import { orderAdd } from '../../../state/actions/ordersActions';
import newOrderSchema from './newOrderSchema';
import './NewOrder.less';

const { Title } = Typography;

function NewOrder(props) {
  const { authState } = useOktaAuth();
  const { push } = useHistory();

  // Initial form data

  const sample = {
    contactName: 'bob',
    contactPhone: '2498239283',
    contactEmail: 'bob@bobsheepshack.com',
    organization: 'bob sheep shack',
    address: '123 wallaby way',
    country: 'USA',
    organizationWebsite: 'bobsheepshack.com',
    quantity: 1,

    /*
      the following fields should be implemented on the backend
    */

    buyerId: 'not implemented',
    dateOrdered: '10-01-2020',
    status: 'not implemented',
    priceDetermined: false,
  };

  const initialErrors = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    organization: '',
    address: '',
    country: '',
    organizationWebsite: '',
    quantity: '',
  };

  const [orderFormData, setOrderFormData] = useState(sample);

  // Alert error messages
  const [formErrors, setFormErrors] = useState(initialErrors);

  // Submit button
  const [submitDisabled, setSubmitDisabled] = useState('disabled');

  // Change 'orderFormData' state when any form field changes its value
  function inputChangeHandler(event) {
    const field = event.target;

    // sync with state
    setOrderFormData({
      ...orderFormData,
      [field.id]: field.value,
    });

    // check if valid
    checkField(field);
  }

  // Checks the validity of an input field
  function checkField(field) {
    yup
      .reach(newOrderSchema, field.id)
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

  // Check form validity on every change, enable/disable the submit button
  useEffect(() => {
    yup
      .reach(newOrderSchema)
      .validate(orderFormData)
      .then(valid => {
        setSubmitDisabled('');
      })
      .catch(err => {
        setSubmitDisabled('disabled');
      });
  }, [orderFormData]);

  // Form submission

  function handleSubmit(event) {
    event.preventDefault();

    props.orderAdd(authState, orderFormData);
    push('/dashboard');
  }

  // Ant styling

  const orderFormLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 7 },
  };

  const submitLayout = {
    wrapperCol: { offset: 3 },
  };

  const errorLayout = {
    wrapperCol: { offset: 3, span: 7 },
  };

  return (
    <div>
      <Title>New Order</Title>
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
      <Form {...orderFormLayout} className="purchaseForm">
        <Form.Item label="Contact name:">
          <Input
            id="contactName"
            value={orderFormData.contactName}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Organization:">
          <Input
            id="organization"
            value={orderFormData.organization}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Website:">
          <Input
            id="organizationWebsite"
            value={orderFormData.organizationWebsite}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Contact phone:">
          <Input
            id="contactPhone"
            value={orderFormData.contactPhone}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Contact e-mail:">
          <Input
            id="contactEmail"
            value={orderFormData.contactEmail}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Address:">
          <Input
            id="address"
            value={orderFormData.address}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Country:">
          <Input
            id="country"
            value={orderFormData.country}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Comments:">
          <Input.TextArea
            id="comments"
            rows="6"
            value={orderFormData.comments}
            onChange={inputChangeHandler}
          />
        </Form.Item>

        <Form.Item label="Quantity:">
          <Input
            type="number"
            min="1"
            value={orderFormData.quantity}
            onChange={inputChangeHandler}
            id="quantity"
          />
        </Form.Item>

        <Form.Item {...submitLayout}>
          <Button
            type="primary"
            disabled={submitDisabled}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { orderAdd })(NewOrder);
