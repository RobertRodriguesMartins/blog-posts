import { combineReducers } from "redux";
import newsReducer from "./news";

const rootReducer = combineReducers({
  news: newsReducer
})

export default rootReducer;
