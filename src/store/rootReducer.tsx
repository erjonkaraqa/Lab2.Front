import { combineReducers } from "redux";
import { productsAPI } from "./products/RTKProductSlice";
import productSlice from "./products/productSlice";
import cartSlice from "@/Cart/store/cartSlice";
import { cartsAPI } from "@/Cart/store/cartAPI";
import { returnRequestsAPI } from "./returnRequests/returnRequestAPI";
import orderSlice from "./orders/orderSlice";
import authSlice from "./auth/authSlice";
import addressesSlice from "./addresses/addressesSlice";

const rootReducer = combineReducers({
  products: productSlice,
  auth: authSlice,
  cart: cartSlice,
  orders: orderSlice,
  address: addressesSlice,
  [cartsAPI.reducerPath]: cartsAPI.reducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [returnRequestsAPI.reducerPath]: returnRequestsAPI.reducer,
});

export default rootReducer;
