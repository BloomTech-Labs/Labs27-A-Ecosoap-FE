import React, { useState } from 'react';
import { connect } from 'react-redux';

import './NewOrder.less';

import { Typography, Collapse, Select, Input, Button, Form } from 'antd';

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
    labelCol: { span: 5 },
  };

  const tailLayout = {
    wrapperCol: { offset: 5 },
  };

  return (
    <div>
      <Form {...layout} className="purchaseForm">
        <h2>Purchase Order Form</h2>

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
          <Input />
        </Form.Item>

        <Form.Item label="Quantity">
          <Input type="number" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <div>Price: </div>
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
