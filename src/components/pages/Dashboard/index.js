import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ordersGet } from '../../../state/actions/ordersActions';
import Order from '../../common/Order';
import { Typography } from 'antd';

function Dashboard(props) {
  // load orders on first render
  useEffect(props.ordersGet, []);

  const { Title, Paragraph } = Typography;

  return (
    <>
      <Title>Dashboard</Title>
      <Paragraph>
        {props.orders &&
          props.orders.map((order, key) => {
            return <Order key={key} order={order} />;
          })}
      </Paragraph>
    </>
  );
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps, { ordersGet })(Dashboard);
