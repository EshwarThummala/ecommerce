import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    productStore : productReducer
})

export default rootReducer;
