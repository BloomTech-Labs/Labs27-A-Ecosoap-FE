import {
  ORDERS_GET_LOADING,
  ORDERS_GET_FAILURE,
  ORDERS_GET_SUCCESS,
  ORDER_EDIT_SUCCESS,
  ORDER_ADD_LOADING,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAILURE,
} from './actionTypes';
import { getOrderData, postOrderData } from '../../api';

// Get all orders
export const ordersGet = authState => dispatch => {
  dispatch({
    type: ORDERS_GET_LOADING,
  });

  getOrderData(authState)
    .then(payload => {
      console.log(payload);

      dispatch({
        type: ORDERS_GET_SUCCESS,
        payload,
      });
    })
    .catch(err => {
      dispatch({
        type: ORDERS_GET_FAILURE,
        payload: err.message,
      });
    });
};

export const orderAdd = (authState, order) => dispatch => {
  dispatch({
    type: ORDER_ADD_LOADING,
  });

  postOrderData(authState, order)
    .then(payload => {
      console.log(payload);

      dispatch({
        type: ORDER_ADD_SUCCESS,
        payload,
      });
    })
    .catch(err => {
      dispatch({
        type: ORDER_ADD_FAILURE,
        payload: err.message,
      });
    });
};

// Edit an individual order
export const orderEdit = editingOrder => dispatch => {
  dispatch({
    type: ORDER_EDIT_SUCCESS,
    payload: editingOrder,
  });
};
