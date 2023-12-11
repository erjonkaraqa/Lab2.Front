import React from 'react'
import WrappingCard from '@/ui/WrappingCard'
import {
  faHeartBroken,
  faShoppingCart,
  faTrash,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageTwentyFour from '@/assets/images/tfTransport.png'
import NewItem from '@/assets/images/newproduct-1.png'
import './style.css'
import {
  useGetWishlistProductsQuery,
  useRemoveAllMutation,
  useRemoveProductMutation,
} from '@/store/wishlist/wishlistAPI'
import LoadingBar from '@/ui/Loading/LoadingBar'
import { toast } from 'react-toastify'
import { Image } from '@/utils/helpers'
import {
  useAddToCartQueryMutation,
  useGetCartProductsQuery,
} from '@/store/cart/cartAPI'
import { addToCartType } from '@/utils/types'

const Wishlist = () => {
  const [removeProduct] = useRemoveProductMutation()
  const { data, isLoading, refetch } = useGetWishlistProductsQuery()
  const [removeAll, { isLoading: removeAllLoading }] = useRemoveAllMutation()
  const [addToCartQuery] = useAddToCartQueryMutation()
  const { refetch: refetchCartProducts } = useGetCartProductsQuery()

  const deleteProductHandler = async (e: any, productID: string) => {
    e.preventDefault()
    try {
      await removeProduct(productID)
      refetch()
      toast.success('Product deleted from wishlist successfuly!')
    } catch (error) {
      console.log('error', error)
    }
  }

  const deleteAllHandler = async (event: any) => {
    event?.preventDefault()

    try {
      await removeAll()
      refetch()
      toast.success('All products deleted from wishlist successfully!')
    } catch (error) {
      console.log('error', error)
    }
  }

  const addToCartHandler = (e: any, items: addToCartType) => {
    e.preventDefault()
    addToCartQuery(items)
      .then(() => {
        toast.success('Product added to cart!')
        refetchCartProducts()
      })
      .catch((err) => console.log('err', err))
  }

  if (removeAllLoading) {
    return <LoadingBar height="50px" size={'50px'} />
  }

  return (
    <>
      <WrappingCard marginBtm="20px" padding="12px">
        <div className="d-flex justify-content-between w-100 align-items-center  account-details-container tablet:mb-6">
          <span className="page-title pointer-events-none w-100 text-left account-details-page-title ">
            Wishlist
          </span>
          <button
            onClick={deleteAllHandler}
            type="button"
            style={{ border: 'none' }}
            className="text-xs d-flex w-25 text-end align-items-center md:whitespace-nowrap focus:outline-none hover:text-primary"
          >
            <span className="hidden tablet:block w-100">REMOVE WISHLIST</span>
            <i className="icon-delete-trash text-sm pl-2 hover:text-primary">
              <FontAwesomeIcon icon={faTrash} />
            </i>
          </button>
        </div>
      </WrappingCard>
      <WrappingCard padding="12px">
        <div className="wishlist-content">
          <form>
            {isLoading ? (
              <LoadingBar height="50px" size={'50px'} />
            ) : !isLoading && data?.length ? (
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4  mb-6">
                {data.map((item) => (
                  <div className="item-box w-100 p-0">
                    <div
                      className="product-item bg-white p-2 md:p-3 position-relative shadow-sm hover:shadow-md rounded h-100 overflow-hidden d-flex flex-col justify-content-between"
                      id="related-products"
                      data-productid="160697"
                    >
                      <div className="h-6 top-2.5 left-0 tablet:pl-0 d-flex tablet:flex-row gap-1 tablet:gap-0 tablet:items-center tablet:flex-wrap z-10 w-full flex-row justify-content-between">
                        <div className="d-flex">
                          {item.isNew && (
                            <div className="pointer-events-none d-flex items-center tablet:pl-3">
                              <img
                                src={NewItem}
                                // className="w-100 h-100"
                                style={{ width: '55px', height: '19px' }}
                                alt=""
                              />
                            </div>
                          )}
                          {item.tfTransport && (
                            <div className="pointer-events-none d-flex items-center tablet:pl-3">
                              <img
                                src={ImageTwentyFour}
                                alt=""
                                style={{ width: '55px', height: '19px' }}
                              />
                            </div>
                          )}
                        </div>
                        {item.discount !== 0 && (
                          <div className="w-10 pl-1 pr-1 h-[19px] bg-primary discount__label d-flex justify-content-center items-center rounded  right-3 shadow-sm text-white text-xs font-medium">
                            -{item.discount}%
                          </div>
                        )}
                      </div>
                      <div className="picture position-relative px-4 pt-4">
                        <a
                          className="relative block"
                          href={`/product/${item.id}`}
                          title={item.title}
                        >
                          <Image
                            src={item.imageCover ? item.imageCover : ''}
                            alt="image cover"
                            className="position-absolute top-0 right-0 bottom-0 left-0 m-auto transition-all duration-300 max-h-full max-w-full object-contain"
                          />
                        </a>
                        {item.stock < 1 && (
                          <div className="position-absolute uppercase top-0 left-0 sold-out-productBox d-flex align-items-center justify-content-center text-center">
                            <a
                              className="w-100 h-100 text-center d-flex align-items-center justify-content-center"
                              title={item.title}
                              href={`/product/${item.id}`}
                            >
                              <span className="text-sm rounded px-2 py-1 bg-gray-100">
                                E shitur
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="details">
                        <span className="product-title">
                          <a
                            className="text-sm md:text-base product-title-lines hover:underline"
                            title={item.title}
                            href={`/product/${item.id}`}
                          >
                            {item.title}
                          </a>
                        </span>
                        <div className="add-info">
                          <div className="prices d-flex flex-col h-12 my-2">
                            {item.discount !== 0 ? (
                              <>
                                <span className="price font-semibold text-gray-700 text-base md:text-xl">
                                  {Math.round(
                                    item.priceDiscount
                                  ).toLocaleString()}
                                  .00 €
                                </span>
                                <small>
                                  <del>
                                    {Math.round(item.price).toLocaleString()}.00
                                    €
                                  </del>
                                </small>
                              </>
                            ) : (
                              <>
                                <span className="price font-semibold text-gray-700 text-base md:text-xl">
                                  {Math.round(item.price).toLocaleString()}.00 €
                                </span>
                                <small style={{ opacity: '0' }}>
                                  <del>test</del>
                                </small>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="buttons d-flex justify-content-evenly gap-2">
                          {item.stock < 1 ? (
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
                              className="h-10 product-box-add-to-cart-button d-flex align-items-center btn-primary-hover justify-content-center md:flex-grow hover:bg-primary hover:text-white w-50 focus:outline-none focus:border-none btn-simple btn-secondary focus:text-white"
                              onClick={(e) => {
                                addToCartHandler(e, {
                                  productId: item.id,
                                  quantity: 1,
                                  price: item.price,
                                })
                              }}
                            >
                              <span className="icon-cart-shopping-add icon-line-height text-xl md:hidden"></span>
                              <span className="hidden md:grid text-xs font-medium">
                                Shto në shportë
                              </span>
                            </button>
                          )}
                          <button
                            style={{ border: 'none' }}
                            className="h-10 d-flex align-items-center justify-content-center hover:bg-primary  md:w-auto add-to-wishlist-button btn-primary-hover hover:text-white focus:outline-none btn btn-secondary focus:text-white"
                            onClick={(e) => deleteProductHandler(e, item.id)}
                          >
                            <i className="icon-delete-trash text-xl">
                              <FontAwesomeIcon icon={faTrashCan} />
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-data px-4 py-12 bg-white flex-col  rounded d-flex justify-content-between align-items-center ">
                <div className="d-flex justify-content-center align-items-center bg-with-opacity bg-opacity-25 rounded-full w-32 h-32 mb-5">
                  <i
                    className="icon-heart text-primary text-6xl"
                    style={{ opacity: '1' }}
                  >
                    <FontAwesomeIcon icon={faHeartBroken} />
                  </i>
                </div>
                <p className="font-medium text-base tablet:text-lg text-center break-words">
                  Your wishlist is empty!
                </p>
                <a
                  className="text-primary font-semibold text-base hover:underline"
                  href="/"
                >
                  Return to dashboard
                </a>
              </div>
            )}
          </form>
        </div>
      </WrappingCard>
    </>
  )
}

export default Wishlist
