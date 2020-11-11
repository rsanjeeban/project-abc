import { CHANGE_SIDEBAR_STATUS } from "../actions/index";

const initState = {
  sidebar_status: true,
};

const masterReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SIDEBAR_STATUS:
      console.log("changed to - " + !state.sidebar_status);
      return { ...state, sidebar_status: !state.sidebar_status };
    default:
      return state;
  }
};

export default masterReducer;
