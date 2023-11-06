import { configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "./products/RTKProductSlice";
import rootReducer from "@/store/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
