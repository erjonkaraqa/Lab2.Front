import { combineReducers } from "redux";
import { productsAPI } from "./products/RTKProductSlice";
import productSlice from "./products/productSlice";
import cartSlice from "@/Cart/store/cartSlice";
import { cartsAPI } from "@/Cart/store/cartAPI";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
  [cartsAPI.reducerPath]: cartsAPI.reducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
});

export default rootReducer;
