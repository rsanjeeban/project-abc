import { FETCH_ORDERS } from "../actions/index";
const initState = {
  orders: [],
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      debugger;
      return { ...state, orders_list: action.data };
    default:
      return state;
  }
};

export default orderReducer;
