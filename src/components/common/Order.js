import React from 'react';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Order(props) {
  const {
    order,
    formattedDate,
    isEditModalVisible,
    setEditModalVisible,
    setEditingOrder,
  } = props;

  function handleOrderEdit() {
    setEditingOrder(order);
    setEditModalVisible(true);
  }

  return (
    <div>
      <h2>Status:</h2>
      <p>{order.status}</p>
      <h2>Date ordered:</h2>
      <p>{formattedDate}</p>
      <h2>Shipping address:</h2>
      <p>
        {order.contactName}
        <br />
        {order.organization}
        <br />
        {order.address}, {order.country}
      </p>
      <h2>Contact info</h2>
      <p>
        Phone: <a href={`tel:${order.contactPhone}`}>{order.contactPhone}</a>
        <br />
        E-mail:{' '}
        <a href={`mailto:${order.contactEmail}`}>{order.contactEmail}</a>
      </p>
      {order.comments && (
        <div>
          <h2>Comments:</h2>
          <p>{order.comments}</p>
        </div>
      )}
      <p>
        <Button icon={<EditOutlined />} onClick={() => handleOrderEdit()}>
          Edit
        </Button>
        <Button icon={<DeleteOutlined />} danger>
          Cancel
        </Button>
      </p>
    </div>
  );
}
