import { ORDERS_GET_SUCCESS, ORDER_EDIT_SUCCESS } from '../actions/actionTypes';

export default function ordersReducer(state = [], action) {
  switch (action.type) {
    case ORDERS_GET_SUCCESS:
      return action.payload;

    case ORDER_EDIT_SUCCESS:
      const modifiedOrder = state.map(currentOrder => {
        if (currentOrder.orderId === action.payload.orderId) {
          return action.payload;
        } else {
          return currentOrder;
        }
      });

      return modifiedOrder;

    default:
      return state;
  }
}
