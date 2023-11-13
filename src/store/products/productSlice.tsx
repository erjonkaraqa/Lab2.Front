import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductService from './ProductService'
import { Product } from '@/utils/types'

type ProductState = {
  loading: boolean
  products: Product[]
  product: Product | null
  success: boolean
  error: boolean | null
  message: string | null
}

const initialState: ProductState = {
  product: null,
  products: [],
  loading: false,
  success: false,
  error: false,
  message: '',
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_: any, thunkAPI: any) => {
    try {
      return await ProductService.fetchProducts()
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching products')
    }
  }
)

export const getProductWithId = createAsyncThunk(
  'products/getProductWithId',
  async (id: string, thunkAPI: any) => {
    try {
      return await ProductService.fetchProductWithId(id)
    } catch (err) {
      console.log('err', err)
      return thunkAPI.rejectWithValue('Error fetching product by ID')
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductState) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state: ProductState, action: any) => {
        state.loading = false
        state.products = action.payload
        state.success = true
        state.error = false
        state.message = 'Success'
      })
      .addCase(fetchProducts.rejected, (state: ProductState, action: any) => {
        state.loading = false
        state.success = false
        state.error = true
        state.message = 'Something went wrong. Please try againg later!'
      })
      .addCase(getProductWithId.pending, (state: ProductState) => {
        state.loading = true
      })
      .addCase(
        getProductWithId.fulfilled,
        (state: ProductState, { payload }: any) => {
          state.loading = false
          state.product = payload
          state.success = true
          state.error = false
          state.message = 'Success'
        }
      )
      .addCase(
        getProductWithId.rejected,
        (state: ProductState, action: any) => {
          state.loading = false
          state.success = false
          state.error = true
          state.message = 'Something went wrong. Please try againg later!'
        }
      )
  },
})

export default productSlice.reducer
