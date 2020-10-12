import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Typography, Input, Button, Form } from 'antd';

const { Title } = Typography;

function NewOrder() {
  const sample = {
    name: 'bob',
    phone: 2498239283,
    email: 'bob@bobsheepshack.com',
    organization: 'bob sheep shack',
    address: '123 wallaby way',
    country: 'USA',
  };

  const [profileData, setProfileData] = useState(sample);

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 7 },
  };

  const tailLayout = {
    wrapperCol: { offset: 4 },
  };

  return (
    <div>
      <Form {...layout} className="purchaseForm">
        <Title>New Order</Title>

        <Form.Item label="Contact Name">
          <Input value={profileData.name} />
        </Form.Item>

        <Form.Item label="Contact Phone">
          <Input value={profileData.phone} />
        </Form.Item>

        <Form.Item label="Contact Email">
          <Input type="email" value={profileData.email} />
        </Form.Item>

        <Form.Item label="Organization">
          <Input value={profileData.organization} />
        </Form.Item>

        <Form.Item label="Organization Website">
          <Input />
        </Form.Item>

        <Form.Item label="Address">
          <Input value={profileData.address} />
        </Form.Item>

        <Form.Item label="Country">
          <Input value={profileData.country} />
        </Form.Item>

        <Form.Item label="Comments">
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Quantity">
          <Input type="number" min="1" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(NewOrder);
