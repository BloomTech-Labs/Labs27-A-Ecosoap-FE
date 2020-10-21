import {
  ORDERS_GET_LOADING,
  ORDERS_GET_FAILURE,
  ORDERS_GET_SUCCESS,
  ORDER_ADD_LOADING,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAILURE,
  ORDER_DELETE_LOADING,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAILURE,
  ORDER_EDIT_LOADING,
  ORDER_EDIT_SUCCESS,
  ORDER_EDIT_FAILURE,
} from './actionTypes';
import {
  getOrderData,
  postOrderData,
  deleteOrderData,
  editOrderData,
} from '../../api';

// Get all orders
export const ordersGet = authState => dispatch => {
  dispatch({
    type: ORDERS_GET_LOADING,
  });

  getOrderData(authState)
    .then(payload => {
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

export const orderAdd = (authState, newOrder, stripe, history) => dispatch => {
  dispatch({
    type: ORDER_ADD_LOADING,
  });
  postOrderData(authState, newOrder)
    .then(({ order }) => {
      dispatch({
        type: ORDER_ADD_SUCCESS,
        payload: order,
      });

      if (order.priceDetermined) {
        stripe.redirectToCheckout({ sessionId: order.id }).then(console.log);
      } else {
        history.push('dashboard');
      }
    })
    .catch(err => {
      dispatch({
        type: ORDER_ADD_FAILURE,
        payload: err.message,
      });
    });
};

export const orderDelete = (authState, id) => dispatch => {
  dispatch({
    type: ORDER_DELETE_LOADING,
  });
  deleteOrderData(authState, id)
    .then(payload => {
      dispatch({
        type: ORDER_DELETE_SUCCESS,
        payload: id,
      });
    })
    .catch(err => {
      dispatch({
        type: ORDER_DELETE_FAILURE,
        payload: err.message,
      });
    });
};

// Edit an individual order
export const orderEdit = (authState, id, updatedData) => dispatch => {
  dispatch({
    type: ORDER_EDIT_LOADING,
  });

  editOrderData(authState, id, updatedData)
    .then(({ order }) => {
      dispatch({
        type: ORDER_EDIT_SUCCESS,
        payload: order,
      });
    })
    .catch(err => {
      dispatch({
        type: ORDER_EDIT_FAILURE,
        payload: err.message,
      });
    });
};
