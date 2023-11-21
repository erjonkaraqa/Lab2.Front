import { Order, OrderInput } from '@/utils/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import OrderService from './orderService'

type InitialStateTypes = {
  orders: Order[]
  isLoading: boolean
  isSuccess: boolean
  error: string | null
}

const initialState: InitialStateTypes = {
  orders: [],
  isLoading: false,
  isSuccess: false,
  error: null,
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  try {
    const response = await OrderService.fetchOrders()
    return response.data
  } catch (error) {
    throw error
  }
})

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (newOrder: OrderInput) => {
    try {
      console.log('newOrder', newOrder)
      const response = await OrderService.createOrder(newOrder)
      console.log('response', response)
      return response
    } catch (error) {
      throw error
    }
  }
)

export const getOrderWithUserID = createAsyncThunk(
  'orders/getOrderWithUserID',
  async () => {
    try {
      return await OrderService.fetchOrderWithUserID()
    } catch (error) {
      throw error
    }
  }
)

export const getAllOrders = createAsyncThunk(
  'orders/getAllOrders',
  async () => {
    try {
      return await OrderService.fetchAllOrders()
    } catch (error) {
      throw error
    }
  }
)

export const updateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async ({ orderID, action }: { orderID: string; action: string }) => {
    try {
      return await OrderService.updateOrderStatus(orderID, action)
    } catch (error) {
      throw error
    }
  }
)

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.orders = action.payload
        state.error = null
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.error.message ?? null
      })
      .addCase(fetchOrders.pending, (state: InitialStateTypes) => {
        state.isLoading = true
      })
      .addCase(fetchOrders.fulfilled, (state: InitialStateTypes, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.orders = action.payload
        state.error = null
      })
      .addCase(fetchOrders.rejected, (state: InitialStateTypes, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.error.message ?? null
      })
      .addCase(createOrder.pending, (state: InitialStateTypes) => {
        state.isLoading = true
      })
      .addCase(createOrder.fulfilled, (state: InitialStateTypes, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.orders.push(action.payload)
        state.error = null
      })
      .addCase(createOrder.rejected, (state: InitialStateTypes, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.error.message ?? null
      })
      .addCase(getOrderWithUserID.pending, (state: InitialStateTypes) => {
        state.isLoading = true
      })
      .addCase(
        getOrderWithUserID.fulfilled,
        (state: InitialStateTypes, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.orders = action.payload
          state.error = null
        }
      )
      .addCase(
        getOrderWithUserID.rejected,
        (state: InitialStateTypes, action) => {
          state.isLoading = false
          state.isSuccess = false
          state.error = action.error.message ?? null
        }
      )
      .addCase(updateOrderStatus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.error = null
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.error.message ?? null
      })
  },
})

export default orderSlice.reducer
