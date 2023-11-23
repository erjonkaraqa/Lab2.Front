import React, { useRef, useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import {
  faHeart,
  faShoppingCart,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProductItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateProductMutation } from '../../../../store/wishlist/wishlistAPI'
import { useNavigate } from 'react-router-dom'
import { ProductItemTypes, addToCartType } from '@/utils/types'
import ImageTwentyFour from '@/assets/images/tfTransport.png'
import NewItem from '@/assets/images/newproduct-1.png'
import {
  useAddToCartQueryMutation,
  useGetCartProductsQuery,
} from '@/store/cart/cartAPI'
import { ToastContainer, toast } from 'react-toastify'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import useSocket from '@/hooks/useSocket'

type AddToCart = {
  id: string
  price: number
  quantity: number
}

const ProductItem: React.FC<ProductItemTypes> = ({
  id,
  category,
  title,
  images,
  stock,
  ratingsQuantity,
  description,
  price,
  priceDiscount,
  summary,
  discount,
  isNew,
  tfTransport,
  warranty,
  imageCover,
  brand,
  hasAccess,
}) => {
  const socket = useSocket()
  const [createProduct, { error }] = useCreateProductMutation()
  const [addToCartQuery] = useAddToCartQueryMutation()
  const { refetch } = useGetCartProductsQuery()

  const productItemRef = useRef()

  console.log('imageCover', imageCover)

  const addToCartHandler = (items: addToCartType) => {
    addToCartQuery(items)
      // .unwrap()
      .then(() => {
        toast.success('Product added to cart!')
        refetch()
      })
      .catch((err) => console.log('err', err))
  }

  const createWishlistProductHandler = (productId: string) => {
    createProduct(productId)
      // .unwrap()
      .then(() => {
        socket?.emit('createWishlistProduct', { productId })
        toast.success('Product added to wishlist!')
      })
      .catch((err) => {
        console.log('err', error)
      })
  }

  const truncatedText =
    description?.length > 50
      ? `${description.substring(0, 50)}...`
      : description

  return (
    <>
      <div className="item-box w-100 p-0">
        <div className="product-item bg-white p-2 md:p-3 relative shadow-sm hover:shadow-md rounded h-full overflow-hidden d-flex flex-col justify-between">
          <div className="h-6 top-2.5 left-0 tablet:pl-0 d-flex tablet:flex-row gap-1 tablet:gap-0 tablet:items-center tablet:flex-wrap z-10 w-full flex-row justify-content-between">
            <div className="d-flex">
              {isNew && (
                <div className="pointer-events-none d-flex items-center tablet:pl-3">
                  <img
                    src={NewItem}
                    // className="w-100 h-100"
                    style={{ width: '55px', height: '19px' }}
                    alt=""
                  />
                </div>
              )}
              {tfTransport && (
                <div className="pointer-events-none d-flex items-center tablet:pl-3">
                  <img
                    src={ImageTwentyFour}
                    alt=""
                    style={{ width: '55px', height: '19px' }}
                  />
                </div>
              )}
            </div>
            {discount !== 0 && (
              <div className="w-10 pl-1 pr-1 h-[19px] bg-primary discount__label d-flex justify-content-center items-center rounded  right-3 shadow-sm text-white text-xs font-medium">
                -{discount}%
              </div>
            )}
          </div>
          <div className="picture position-relative px-4 pt-6">
            <a href={`/product/${id}`} className="position-relative d-block">
              <img
                src={`http://127.0.0.1:5000/img/products/${imageCover}`}
                alt="product-image"
                className="position-absolute top-0 right-0 bottom-0 left-0 m-auto transition-all duration-300 max-h-full max-w-full object-contain"
              />
            </a>
            {stock < 1 && (
              <div className="position-absolute uppercase top-0 left-0 sold-out-productBox d-flex align-items-center justify-content-center text-center">
                <a
                  className="w-100 h-100 text-center d-flex align-items-center justify-content-center"
                  href={`product/${id}`}
                >
                  <span className="text-sm rounded px-2 py-1 bg-gray-100">
                    E shitur
                  </span>
                </a>
              </div>
            )}
          </div>
          <div className="details d-flex flex-col h-100 justify-content-between pb-2">
            <h2 className="product-title">
              <a
                className="text-gray-700  md:text-base product-title-lines hover:underline"
                title="Apple iPhone 15, 128GB, Black"
                href={`/product/${id}`}
              >
                {title}
              </a>
              {hasAccess ? (
                <Dropdown>
                  <Dropdown.Toggle
                    className="custom-button"
                    variant="success"
                    id="dropdown-basic"
                  >
                    ...
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href={`/admin/update-product/${id}`}>
                      Edit product
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Remove product
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : null}
            </h2>
            <div className="prices d-flex flex-col h-12 position-relative">
              {discount !== 0 ? (
                <>
                  <span className="price font-semibold text-gray-700 text-base md:text-xl">
                    {priceDiscount?.toFixed(2)} €
                  </span>
                  <small>
                    <del>{price.toFixed(2)} $</del>
                  </small>
                </>
              ) : (
                <>
                  <span className="price font-semibold text-gray-700 text-base md:text-xl">
                    {price.toFixed(2)} €
                  </span>
                  <small style={{ opacity: '0' }}>
                    <del>test</del>
                  </small>
                </>
              )}
            </div>
            <div className="flex flex-col pt-2 justify-between lg:flex-row">
              <span className="text-xs text-gray-600">Përfshirë TVSH</span>
            </div>
          </div>
          <div className="buttons d-flex justify-content-evenly gap-2">
            {stock < 1 ? (
              <button
                className="disabled:opacity-60 pointer-events-none d-flex flex-grow align-items-center justify-content-center gap-2 uppercase btn-simple btn-secondary"
                disabled={true}
                aria-label="JASHTË STOKU"
              >
                <i className="icon-cart-shopping-cancel text-gray-700 text-2xl">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </i>
                <span className="text-xs text-gray-700 hidden md:flex font-medium">
                  JASHTË STOKU
                </span>
              </button>
            ) : (
              <button
                aria-label="Shto në shportë"
                id="add-to-cart-(160697)"
                //  onclick="sendAddToCartEvent('160697', `Apple iPhone 15, 128GB, Black`, '1099,50', 'cart');AjaxCart.addproducttocart_catalog(`/addproducttocart/catalog/160697/1/1`);produceConvertedObjectEvent(['160697'], 'Add_To_Cart');return false;"
                onClick={() =>
                  addToCartHandler({ productId: id, quantity: 1, price })
                }
                className="align-items-center d-flex gap-2 items-center btn-primary-hover hover:bg-primary hover:text-white justify-content-center md:flex-grow w-75 focus:outline-none focus:border-none focus:text-white btn-simple btn-secondary"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="icon-cart-shopping icon-line-height text-2xl md:hidden hidden"
                />
                <span className=" md:grid text-xs font-medium">
                  Shto në shportë
                </span>
              </button>
            )}
            <button
              type="button"
              id="add-to-wishlisht-(160697)"
              value="Shto në listën e dëshirave"
              style={{ border: 'none' }}
              title="Shto në listën e dëshirave"
              onClick={() => createWishlistProductHandler(id)}
              className="group hover:bg-primary w-25 md:w-auto add-to-wishlist-button  btn-primary-hover hover:text-white focus:outline-none btn btn-secondary focus:text-white"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="icon-heart text-2xl group-hover:text-white border-none"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
