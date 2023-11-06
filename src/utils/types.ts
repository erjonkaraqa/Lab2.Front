export type Product = {
  id: string;
  title: string;
  rating: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  brand: string;
  discount: number;
  tfTransport: boolean;
  warranty: string;
  isNew: boolean;
  details: Detail[];
  summary: string;
  description: string;
  imageCover: string | null;
  images: [];
  price: number;
  category: string;
  stock: number;
  priceDiscount: number;
  thumbnail: string;
  relatedProducts: string[];
  tags: [];
  productStatus: string;
  createdBy: string;
};
type Detail = {
  key: string;
  value: string;
};
export type ProductInput = {
  title: string;
  rating?: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  brand: string;
  discount: number | null;
  tfTransport: boolean;
  warranty: string;
  isNew: boolean;
  details: Detail[];
  summary: string;
  description: string;
  imageCover: File | null;
  images: File[] | FileList | [];
  price: number | string;
  category: string;
  stock: number;
  priceDiscount?: number;
  thumbnail?: string;
  relatedProducts: string[];
  tags: [];
  productStatus: string;
  createdBy: string;
};

export type ProductCategory = {
  _id: string;
  name: string;
  description: string;
};
export type ProductCategoryInput = {
  name: string;
  description: string;
};
export type Rating = {
  title: string;
  userID: string;
  productID: string | Product;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
};
export type RatingInput = {
  title: string;
  userID: string;
  productID: string | Product;
  description?: string;
  rating: number;
};
