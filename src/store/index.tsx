import { configureStore } from '@reduxjs/toolkit'
import { productsAPI } from './products/RTKProductSlice'
import rootReducer from '@/store/rootReducer'
import { cartsAPI } from '@/Cart/store/cartAPI'
import { wishlistsAPI } from '@/wishlist/store/wishlistAPI'
import { returnRequestsAPI } from './returnRequests/returnRequestAPI'

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
