import { combineReducers } from "redux";
import reducer from "./features/HomePage/reducer";

const rootReducer = combineReducers({
  post: reducer,
});

export default rootReducer;
