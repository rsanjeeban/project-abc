/*=========================================================================================
  File Name: masterReducer.js
  Description: masterReducer - to keep the master data
==========================================================================================*/
// Actions
import { CHANGE_SIDEBAR_STATUS } from "../actions/index";

// Initial state
const initState = {
  sidebar_status: true,
};

// Reducer
const masterReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SIDEBAR_STATUS:
      return { ...state, sidebar_status: !state.sidebar_status };
    default:
      return state;
  }
};

export default masterReducer;
