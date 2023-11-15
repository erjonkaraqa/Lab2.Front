import { Product } from '@/utils/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

console.log('BASE_URL', BASE_URL)

type CreateProductResponse = {
  product: Product
}

export const wishlistsAPI = createApi({
  reducerPath: 'wishlistsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),

  endpoints: (builder) => ({
    getWishlistProducts: builder.query<Product[], void>({
      query: () => '/api/v1/wishlist',
    }),
    createProduct: builder.mutation<CreateProductResponse, string>({
      query: (id) => ({
        url: '/api/v1/wishlist/create',
        method: 'POST',
        body: { products: [id] },
      }),
    }),
    removeProduct: builder.mutation<void, string>({
      query: (productId) => ({
        url: `/api/v1/wishlist/delete/${productId}`,
        method: 'DELETE',
      }),
    }),
    removeAll: builder.mutation<void, void>({
      query: () => ({
        url: '/api/v1/wishlist/deleteAll',
        method: 'DELETE',
      }),
    }),
  }),

})

export const {
  useGetWishlistProductsQuery,
  useRemoveProductMutation,
  useRemoveAllMutation,
  useCreateProductMutation,
} = wishlistsAPI
