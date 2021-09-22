import { combineReducers } from "redux";
import postsReducer from "./posts";

const rootReducer = combineReducers({
  post: postsReducer,
});

export default rootReducer;
