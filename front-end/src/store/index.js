/*=========================================================================================
  File Name: index.js
  Description: RootReducer
==========================================================================================*/

import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export default store;
