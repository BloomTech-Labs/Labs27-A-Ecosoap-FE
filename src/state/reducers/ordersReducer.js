import { ORDERS_GET_SUCCESS } from '../actions/actionTypes';

export default function ordersReducer(state = [], action) {
  switch (action.type) {
    case ORDERS_GET_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
