import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import cartService from './cartService'
import { CartItemProduct } from '@/utils/types'

type initialStateTypes = {
  isLoading: boolean
  cart: CartItemProduct[]
  cartItem: CartItemProduct | null
  error: null | string | boolean
  message: string
}

const initialState: initialStateTypes = {
  isLoading: false,
  cart: [],
  cartItem: null,
  error: null,
  message: '',
}

type GetCartProductsErrorPayload = {
  error: string
}

export const getCartProducts = createAsyncThunk(
  'cart/getCartProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await cartService.getCartProducts()
      return res
    } catch (error) {
      console.error('Error fetching wishlist products:', error)
      return rejectWithValue({
        error: 'An error occurred while fetching cart products.',
      })
    }
  }
)

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (cartItems: CartItemProduct, thunkAPI) => {
    try {
      return await cartService.addToCart(cartItems)
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching products')
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state: initialStateTypes) => {
      state.isLoading = false
      state.cart = []
      state.error = null
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state: initialStateTypes) => {
        state.isLoading = true
      })
      .addCase(
        getCartProducts.fulfilled,
        (state: initialStateTypes, action) => {
          state.isLoading = false
          state.cart = action.payload
          state.message = 'success'
        }
      )
      .addCase(getCartProducts.rejected, (state: initialStateTypes) => {
        state.isLoading = false
        state.cart = []
        state.error = true
        state.message = 'Something went wrong '
      })
      .addCase(addToCart.pending, (state: initialStateTypes) => {
        state.isLoading = true
      })
      .addCase(addToCart.fulfilled, (state: initialStateTypes, action) => {
        state.isLoading = false
        state.cartItem = action.payload
        state.error = false
        state.message = 'success'
      })
      .addCase(addToCart.rejected, (state: initialStateTypes, action) => {
        state.isLoading = false
        state.cart = []
        state.error = true
        state.message = 'Something went wrong '
      })
  },
})

export const { clearCart } = cartSlice.actions
export default cartSlice.reducer
