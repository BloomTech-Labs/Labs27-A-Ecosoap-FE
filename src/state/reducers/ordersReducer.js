import {
  ORDERS_GET_FAILURE,
  ORDERS_GET_LOADING,
  ORDERS_GET_SUCCESS,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAILURE,
  ORDER_ADD_LOADING,
  ORDER_EDIT_SUCCESS,
  ORDER_EDIT_FAILURE,
  ORDER_EDIT_LOADING,
  ORDER_DELETE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  error: '',
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case ORDERS_GET_LOADING:
    case ORDER_ADD_LOADING:
    case ORDER_EDIT_LOADING:
      return { ...state, loading: true };

    case ORDERS_GET_SUCCESS:
      return { ...state, loading: false, orders: action.payload };

    case ORDERS_GET_FAILURE:
    case ORDER_ADD_FAILURE:
    case ORDER_EDIT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ORDER_EDIT_SUCCESS:
      const modifiedOrders = state.orders.map(currentOrder => {
        if (currentOrder.id === action.payload.id) {
          return action.payload;
        } else {
          return currentOrder;
        }
      });

      return { ...state, orders: modifiedOrders, loading: false };

    case ORDER_ADD_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case ORDER_DELETE_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter(order => {
          return order.id !== action.payload;
        }),
        loading: false,
      };

    default:
      return state;
  }
}
