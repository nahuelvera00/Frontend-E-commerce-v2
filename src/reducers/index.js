import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import clientReducer from "./clientReducer";

export default combineReducers({
  admin: adminReducer,
  cliente: clientReducer,
});
