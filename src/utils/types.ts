export type User = {
  refreshToken: string
  status: string
  token: string
  user: {
    name: string
    surname: string
    gender?: 'male' | 'female'
    country: string
    cart: string
    city: string
    email: string
    id: string
    photo: string
    role: string
    wishlist?: string
    birthdate?: Date
  }
}
export type Product = {
  id: string
  title: string
  rating: number
  ratingsAverage: number
  ratingsQuantity: number
  brand: string
  discount: number
  tfTransport: boolean
  warranty: string
  isNew: boolean
  details: Detail[]
  summary: string
  description: string
  imageCover: string | null
  images: []
  price: number
  category: string
  stock: number
  priceDiscount: number
  thumbnail: string
  relatedProducts: string[]
  tags: []
  productStatus: string
  createdBy: string
}
type Detail = {
  key: string
  value: string
}
export type ProductInput = {
  title: string
  rating?: number
  ratingsAverage?: number
  ratingsQuantity?: number
  brand: string
  discount: number | null
  tfTransport: boolean
  warranty: string
  isNew: boolean
  details: Detail[]
  summary: string
  description: string
  imageCover: File | null
  images: File[] | FileList | []
  price: number | string
  category: string
  stock: number
  priceDiscount?: number
  thumbnail?: string
  relatedProducts: string[]
  tags: []
  productStatus: string
  createdBy: string
}

export type ProductCategory = {
  _id: string
  name: string
  description: string
}
export type ProductCategoryInput = {
  name: string
  description: string
}
export type Rating = {
  title: string
  userID: string
  productID: string | Product
  description: string
  rating: number
  createdAt: Date
  updatedAt: Date
}
export type RatingInput = {
  title: string
  userID: string
  productID: string | Product
  description?: string
  rating: number
}
export type ImageHelperTypes = {
  src: string
  alt: string
  className: string
}

export type CartItemProduct = {
  product: Product
  quantity: number
  price: number
}
export type CartItem = {
  status: string
  results: number
  products: CartItemProduct[]
}
export type addToCartType = {
  productId: string
  quantity: number
  price: number
}
export type OrderProduct = {
  product: string | Product
  quantity: number
}

export type Order = {
  _id: string
  userID: string
  products: OrderProduct[]
  status: 'pending' | 'processed' | 'completed' | 'admin'
  addressID: string
  billingAddress: string
  transportMode: string
  transportModeStatus: string
  paymentMethod: string
  paymentMethodStatus: string
  comments: string | null
  orderDate: string
  arrivalDate: string
  totalOrderPrice: number
  tvsh: number
  orderCode: string
  createdAt: string
  updatedAt: string
}
export type OrderInput = {
  products: OrderProduct[]
  status: string
  addressID: string
  billingAddress: string
  transportMode: string
  transportModeStatus: string
  paymentMethod: string
  paymentMethodStatus: string
  comments?: string | null
  totalOrderPrice: number
  tvsh: number
  orderDate?: string
  arrivalDate: string
  orderCode: string
}
export type ReturnRequest = {
  _id: string
  order: string
  requestId: string
  reason: string
  productsDetails: ReturnRequestProductDetail[]
  requestDate: string
  returningAction: string
  returningStatus: string
}

export type ReturnRequestProductDetail = {
  product: Product
  quantity: number
}

export type ReturnRequestInput = {
  order: string
  reason: string
  productsDetails: ReturnRequestProductDetail[] | ReturnRequestProductDetail
  returningAction: string
  returningStatus?: string
}
export type ChangePasswordInput = {
  passwordCurrent: string
  password: string
  passwordConfirm: string
}

export type Address = {
  id: string
  type: string
  name: string
  surname: string
  company?: string
  fiscalNumber?: string
  country: string
  city: string
  address: string
  email: string
  telephone: string
}
export type CreateAddress = {
  type: string
  name: string
  surname: string
  company?: string
  fiscalNumber?: string
  country: string
  city: string
  address: string
  email: string
  telephone: string
}

export type SignupUserData = {
  name: string
  surname: string
  gender?: 'male' | 'female'
  country?: string
  city?: string
  email: string
  password: string
  passwordConfirm: string
  birthdate?: Date
}
export type AuthPromise = {
  status: string
  token: string
  refreshToken: string
  user: SignupUserData
}
export type LoginUserData = {
  email: string
  password: string
}
export type NewAddressCheckout = {
  type: string
  name: string
  surname: string
  company?: string
  fiscalNumber?: string
  country: string
  city: string
  address: string
  email: string
  telephone: number | null
}
export type OrderData = {
  data: any[]
  hasMore: boolean
  object: string
  url: string
}
