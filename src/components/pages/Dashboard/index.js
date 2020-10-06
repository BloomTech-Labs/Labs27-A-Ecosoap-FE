import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Typography, Collapse } from 'antd';

import { ordersGet } from '../../../state/actions/ordersActions';
import Order from '../../common/Order';

function Dashboard(props) {
  // load orders on first render
  useEffect(props.ordersGet, []);

  const { Title, Paragraph } = Typography;
  const { Panel } = Collapse;

  return (
    <>
      <Title>Dashboard</Title>
      <Paragraph>
        <Collapse accordion>
          {props.orders &&
            props.orders.map((order, key) => {
              const d = new Date(order.dateOrdered);
              // date in a human readable format
              const formattedDate = `${d.getMonth() +
                1}/${d.getDate()}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`;

              return (
                <Panel
                  header={`Order #${order.orderId} (${formattedDate})`}
                  key={key}
                >
                  <Order order={order} formattedDate={formattedDate} />
                </Panel>
              );
            })}
        </Collapse>
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
