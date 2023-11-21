import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import { productsAPI } from './products/RTKProductSlice'
import productSlice from './products/productSlice'
import cartSlice from '@/Cart/store/cartSlice'
import { cartsAPI } from '@/Cart/store/cartAPI'
import { returnRequestsAPI } from './returnRequests/returnRequestAPI'
import orderSlice from './orders/orderSlice'
import authSlice from './auth/authSlice'
import addressesSlice from './addresses/addressesSlice'
import wishlistSlice from '@/wishlist/store/wishlistSlice'
import { wishlistsAPI } from '@/wishlist/store/wishlistAPI'

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
