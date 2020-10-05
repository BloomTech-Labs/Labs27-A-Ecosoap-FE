import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ordersGet } from '../../../state/actions/ordersActions';
import Order from '../../common/Order';
import Header from '../../common/Header';

function Dashboard(props) {
  // load orders on first render
  useEffect(props.ordersGet, []);

  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <div>
        {props.orders &&
          props.orders.map((order, key) => {
            return <Order key={key} order={order} />;
          })}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps, { ordersGet })(Dashboard);
