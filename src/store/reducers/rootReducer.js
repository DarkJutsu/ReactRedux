import { combineReducers } from "redux";
import { filterReducer } from "./filterReducers";
import { taskReducer } from "./taskReducers";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  taskState: taskReducer,
  filterState: filterReducer,
  userState: userReducer,
});
