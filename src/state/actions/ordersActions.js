import { ORDERS_GET_SUCCESS } from './actionTypes';

export const ordersGet = () => dispatch => {
  const sampleData = [
    {
      orderId: 1,
      buyerId: 23,
      quantity: 10,
      dateOrdered: '2020-10-12T18:25:43.511Z',
      status: 0,
      price: 100,
      priceDetermined: true,
      comments: 'Sample comment',
      organization: 'Company Inc.',
      organizationWebsite: 'example.com',
      contactName: 'Michael',
      contactPhone: '(123) 123-4567',
      contactEmail: 'example@example.com',
      address: '1234 34th St. SW',
      country: 'US',
    },
    {
      orderId: 2,
      buyerId: 23,
      quantity: 20,
      dateOrdered: '2021-10-10T18:25:43.511Z',
      status: 1,
      price: 100,
      priceDetermined: true,
      comments: null,
      organization: 'Sales Inc.',
      organizationWebsite: 'example.com',
      contactName: 'Jack',
      contactPhone: '(123) 123-4567',
      contactEmail: 'example@example.com',
      address: '12th Ave',
      country: 'UK',
    },
  ];

  dispatch({
    type: ORDERS_GET_SUCCESS,
    payload: sampleData,
  });
};
