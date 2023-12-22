import { configureStore } from '@reduxjs/toolkit'
import { productsAPI } from './products/RTKProductSlice'
import rootReducer from './rootReducer'
import { cartsAPI } from '@/store/cart/cartAPI'
import { returnRequestsAPI } from './returnRequests/returnRequestAPI'
import { wishlistsAPI } from './wishlist/wishlistAPI'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      productsAPI.middleware,
      cartsAPI.middleware,
      wishlistsAPI.middleware,
      returnRequestsAPI.middleware
    )
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
