import { combineReducers } from "redux";
import { productsAPI } from "./products/RTKProductSlice";
import productSlice from "./products/productSlice";

const rootReducer = combineReducers({
  products: productSlice,
  [productsAPI.reducerPath]: productsAPI.reducer,
});

export default rootReducer;
