import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import { productsAPI } from './products/RTKProductSlice'
import productSlice from './products/productSlice'
import cartSlice from '@/store/cart/cartSlice'
import { cartsAPI } from '@/store/cart/cartAPI'
import { returnRequestsAPI } from './returnRequests/returnRequestAPI'
import orderSlice from './orders/orderSlice'
import authSlice from './auth/authSlice'
import addressesSlice from './addresses/addressesSlice'
import wishlistSlice from '@/store/wishlist/wishlistSlice'
import { wishlistsAPI } from '@/store/wishlist/wishlistAPI'

const rootReducer = combineReducers({
  products: productSlice,
  auth: authSlice,
  form: formReducer,
  cart: cartSlice,
  wishlist: wishlistSlice,
  address: addressesSlice,
  orders: orderSlice,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [cartsAPI.reducerPath]: cartsAPI.reducer,
  [wishlistsAPI.reducerPath]: wishlistsAPI.reducer,
  [returnRequestsAPI.reducerPath]: returnRequestsAPI.reducer,
})

export default rootReducer
