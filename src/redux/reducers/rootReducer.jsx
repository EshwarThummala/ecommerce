import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
    productStore : productReducer,
    cartItems : cartReducer,
    categoryStore : categoryReducer
})

export default rootReducer;
