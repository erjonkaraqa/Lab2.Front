
import { CartItemProduct } from '@/utils/types'
import axiosInstance from '../../api/axiosInstance'


const API_URL = 'api/v1/cart'

const getCartProducts = async (): Promise<CartItemProduct[]> => {
  const response = await axiosInstance.get(API_URL)

  return response.data
}

const addToCart = async (
  cartItems: CartItemProduct
): Promise<CartItemProduct> => {
  console.log('cartItems', cartItems)

  return cartItems
}



const cartService = {
  addToCart,
  getCartProducts,

}

export default cartService
