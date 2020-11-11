import { FETCH_ORDERS } from "../actions/index";
const initState = {
  orders_list: [],
};

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
    default:
      return state;
  }
};

export default orderReducer;
