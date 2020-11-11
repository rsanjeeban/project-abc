import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import masterReducer from "./masterReducer";

const rootReducer = combineReducers({
  masterData: masterReducer,
  order: orderReducer,
});

export default rootReducer;
