import { combineReducers } from "redux";
import { productsAPI } from "./products/RTKProductSlice";
import productSlice from "./products/productSlice";
import cartSlice from "@/Cart/store/cartSlice";
import { cartsAPI } from "@/Cart/store/cartAPI";
import { returnRequestsAPI } from "./returnRequests/returnRequestAPI";
import orderSlice from "./orders/orderSlice";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
  orders: orderSlice,
  [cartsAPI.reducerPath]: cartsAPI.reducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [returnRequestsAPI.reducerPath]: returnRequestsAPI.reducer,
});

export default rootReducer;
