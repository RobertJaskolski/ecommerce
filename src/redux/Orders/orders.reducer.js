import ordersTypes from "./orders.types";

const INIT_STATE = {
  orderHistory: [],
};
const ordersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ordersTypes.SET_USER_ORDER_HISTORY:
      return { ...state, orderHistory: action.payload };
    default:
      return state;
  }
};

export default ordersReducer;
