import React from 'react';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Order(props) {
  const { order, formattedDate } = props;

  return (
    <>
      <h4>Status:</h4>
      <p>{order.status}</p>
      <h4>Date ordered:</h4>
      <p>{formattedDate}</p>
      <h4>Shipping address:</h4>
      <p>
        {order.contactName}
        <br />
        {order.organization}
        <br />
        {order.address}, {order.country}
      </p>
      <h4>Contact info</h4>
      <p>
        Phone: <a href={`tel:${order.contactPhone}`}>{order.contactPhone}</a>
        <br />
        E-mail:{' '}
        <a href={`mailto:${order.contactEmail}`}>{order.contactEmail}</a>
      </p>
      {order.comments && (
        <>
          <h4>Comments:</h4>
          <p>{order.comments}</p>
        </>
      )}
      <p>
        <Button icon={<EditOutlined />}>Edit</Button>
        <Button icon={<DeleteOutlined />} danger>
          Cancel
        </Button>
      </p>
    </>
  );
}
