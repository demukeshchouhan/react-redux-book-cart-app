import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    bookReducer,
    cartReducer
});

export default rootReducer;