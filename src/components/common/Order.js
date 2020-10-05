import React from 'react';

export default function Order(props) {
  const order = props.order;

  return <div>{order.title}</div>;
}
