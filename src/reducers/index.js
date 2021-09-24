import { combineReducers } from "redux";
import authReducer from "./auth";
import postsReducer from "./posts";

const rootReducer = combineReducers({
  post: postsReducer,
  auth: authReducer,
});

export default rootReducer;
