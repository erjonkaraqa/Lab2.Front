import axiosInstance from '@/api/axiosInstance'
import { Product } from '@/utils/types'

const API_URL = '/api/v1/wishlist'

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get(API_URL)

  console.log('response.data', response.data)

  if (response.data) {
    return response.data as Product[]
  } else {
    return []
  }
}

const WishlistService = {
  getProducts,
}

export default WishlistService
