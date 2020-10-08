import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Typography, Collapse } from 'antd';

import { ordersGet } from '../../../state/actions/ordersActions';
import Order from '../../common/Order';

import './dashboard.less';

const { Paragraph } = Typography;
const { Panel } = Collapse;

function Dashboard(props) {
  // load orders on first render
  useEffect(props.ordersGet, []);

  return (
    <>
      <div className={'dashboard'}>
        <h1>Dashboard</h1>
        <input
          className="searchBar"
          type="search"
          placeholder="Search orders"
        />

        <select className={'priceSelect'}>
          <option defaultValue="default">Choose order type</option>
          <option value="unpriced">Unpriced</option>
          <option value="priced">Priced</option>
        </select>
      </div>

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
