import { ORDERS_GET_SUCCESS } from './actionTypes';

export const ordersGet = () => dispatch => {
  const sampleData = [
    {
      title: 'The title of the first order',
    },
  ];

  dispatch({
    type: ORDERS_GET_SUCCESS,
    payload: sampleData,
  });
};
