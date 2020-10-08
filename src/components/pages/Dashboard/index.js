import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Typography, Collapse, Select, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { ordersGet } from '../../../state/actions/ordersActions';
import Order from '../../common/Order';
import SearchResults from '../../common/SearchResults';
import OrderEdit from '../../common/OrderEdit';

import './Dashboard.less';

// Ant design components
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

function Dashboard(props) {
  const orders = props.orders;

  // load orders on first render
  useEffect(props.ordersGet, []);

  // search for an order
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function searchQueryHandler(event) {
    // Update search field state
    const searchField = event.target;
    setSearchQuery(searchField.value);

    // Clear all search results
    setSearchResults([]);
  }

  // Price determined/undetermined filter

  const [priceFilter, setPriceFilter] = useState('all');

  function priceDeterminedHandler(value) {
    setPriceFilter(value);
  }

  // States for edit order modal window
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editingOrder, setEditingOrder] = useState({});

  return (
    <>
      <div className="Dashboard">
        <Title>Dashboard</Title>
        <div>
          <Input
            addonBefore={<SearchOutlined />}
            style={{ width: 350 }}
            type="search"
            placeholder="Search orders"
            value={searchQuery}
            onChange={searchQueryHandler}
          />
        </div>
        <div>
          Filter by price:{' '}
          <Select defaultValue="all" onChange={priceDeterminedHandler}>
            <option value="all">All orders</option>
            <option value="determined">Unpriced</option>
            <option value="undetermined">Priced</option>
          </Select>
        </div>
      </div>

      {/* Display search results if there are any */}
      <SearchResults
        orders={orders}
        searchResults={searchResults}
        searchQuery={searchQuery}
        setSearchResults={setSearchResults}
      />

      <Paragraph>
        <h2>All orders</h2>
        <Collapse accordion>
          {orders &&
            orders.map((order, index) => {
              const d = new Date(order.dateOrdered);
              // date in a human readable format
              const formattedDate = `${d.getMonth() +
                1}/${d.getDate()}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`;

              if (
                (priceFilter === 'determined' &&
                  order.priceDetermined === true) ||
                (priceFilter === 'undetermined' &&
                  order.priceDetermined === false)
              ) {
                return;
              }

              return (
                <Panel
                  header={`Order #${order.orderId} (${formattedDate})`}
                  key={index}
                  isEditModalVisible={isEditModalVisible}
                  setEditModalVisible={setEditModalVisible}
                >
                  <Order
                    order={order}
                    formattedDate={formattedDate}
                    setEditModalVisible={setEditModalVisible}
                    isEditModalVisible={isEditModalVisible}
                    setEditingOrder={setEditingOrder}
                  />
                </Panel>
              );
            })}
        </Collapse>
      </Paragraph>
      <OrderEdit
        isEditModalVisible={isEditModalVisible}
        setEditModalVisible={setEditModalVisible}
        editingOrder={editingOrder}
        setEditingOrder={setEditingOrder}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps, { ordersGet })(Dashboard);
