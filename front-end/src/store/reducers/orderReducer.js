/*=========================================================================================
  File Name: masterReducer.js
  Description: masterReducer - to keep the master data
==========================================================================================*/
// Actions
import { FETCH_ORDERS, SET_DRAWER_ORDER } from "../actions/index";

// Initial State
const initState = {
  orders_list: [],
  order_view: null,
};

// Reducer
const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      action.data.map((item) => {
        // item.contactPerson = item.contactPerson.contactPersonTitle
        //   ? item.contactPerson.contactPersonTitle
        //   : "" + "." + item.contactPerson.contactPersonName
        //   ? item.contactPerson.contactPersonName
        //   : "";

        // item.contactPerson = item.contactPersonOrderer.contactPersonOrdererTitle
        //   ? item.contactPersonOrderer.contactPersonOrdererTitle
        //   : "" + "." + item.contactPersonOrderer.contactPersonOrdererName
        //   ? item.contactPersonOrderer.contactPersonOrdererName
        //   : "";
        return item;
      });

      return { ...state, orders_list: action.data };
    case SET_DRAWER_ORDER:
      debugger;
      return { ...state, order_view: action.data };
    default:
      return state;
  }
};

export default orderReducer;
