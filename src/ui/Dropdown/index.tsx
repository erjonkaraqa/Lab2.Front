import React, { ReactNode, useContext, useRef, useState } from 'react'
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuDirection,
  MenuState,
  MenuAlign,
  ControlledMenu,
  useClick,
} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faReorder,
  faShoppingCart,
  faTrashCan,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'
import { CartItemProduct } from '@/utils/types'
import {
  useDeleteCartProductMutation,
  useGetCartProductsQuery,
} from '@/store/cart/cartAPI'
import { useNavigate } from 'react-router-dom'
import { CalculateTotalPrice } from '@/Cart/components/calculateTotalPrice'
import { Image } from '@/utils/helpers'
import { useAppSelector } from '@/hooks/useAppSelector'
import LoadingBar from '../Loading/LoadingBar'

type DropdownProps = {
  children?: ReactNode
  buttonContent?: string
  icon?: React.ReactNode
  cartItemProducts?: CartItemProduct[] | undefined
  menuItems?: string[]
  placement?: string
  logout?: () => void
  direction: MenuDirection | undefined
  menuClassName: string
  align: MenuAlign | undefined
  handleDeleteCartProduct: (productId: string) => void
  hasCartNumber?: boolean
}

const CustomDropdown = ({
  icon,
  cartItemProducts,
  menuItems,
  buttonContent,
  logout,
  direction,
  menuClassName,
  align,
  hasCartNumber,
  handleDeleteCartProduct,
}: DropdownProps) => {
  const navigate = useNavigate()
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null)
  const user = useAppSelector((state) => state.auth.user?.user)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const anchorProps = useClick(isOpen, setOpen)
  const { data: cart, isLoading: cartLoading } = useGetCartProductsQuery()

  const cartItemClassName = ({ hover }: any) =>
    hover ? 'my-menuCartItem-hover' : 'my-menuCartItem'

  const menuItemClassName = ({ hover }: any) =>
    hover ? 'my-menuitem-hover' : 'my-menuitem'

  const gotoCart = () => {
    navigate('/cart')
    setOpen(false)
  }

  const totalPriceInfo = CalculateTotalPrice(cart?.products)
  const { totalPriceWithVAT } = totalPriceInfo

  return (
    <>
      <a type="button" ref={ref} {...anchorProps}>
        <span
          title="Shporta e blerjes"
          id="topcartlink"
          className="ico-cart nav-i-animation i-bg-effect position-relative"
        >
          <span className="icon-cart-shopping text-white md:text-white text-xl">
            {buttonContent}
            {icon}
          </span>
          {hasCartNumber && (
            <span className="cart-qty animate-flip bg-primary rounded-full position-absolute top-0 right-0">
              {cartLoading ? (
                <div className="d-flex align-items-center h-100 justify-content-center">
                  <LoadingBar height="10px" size={'10px'} />
                </div>
              ) : (
                cartItemProducts?.length || 0
              )}
            </span>
          )}
        </span>
      </a>
      <ControlledMenu
        state={isOpen ? 'open' : 'closed'}
        anchorRef={ref}
        onClose={() => setOpen(false)}
        menuClassName={menuClassName}
        transition
        align={align}
        direction={direction}
      >
        {cartItemProducts ? (
          cartItemProducts?.length > 0 ? (
            <div className="w-100">
              <div className="pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                <small className="header-productItem ">
                  You have {cartItemProducts.length} product(s) in your cart
                </small>
              </div>
              {cartItemProducts?.map((item, index) => (
                <MenuItem key={index} className={cartItemClassName}>
                  <div className="d-flex justify-content-between text-xs align-items-center w-100">
                    <div className="product-image position-relative d-block">
                      <a
                        className="w-10 h-10 d-flex justify-content-center align-items-center small-image-container"
                        href="/maus-logitech-g-pro-x-superlight-i-bardhe"
                        title="Shfaq detaje për Maus Logitech G Pro X Superlight, i bardhë"
                      >
                        <Image
                          src={
                            item.product.imageCover
                              ? item.product.imageCover
                              : ''
                          }
                          alt="img"
                          className="max-h-full max-w-full position-relative"
                        />
                      </a>
                    </div>
                    <div
                      className="col-8 pr-1"
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <h6 className="text-sm">{item.product.title}</h6>
                      <small>
                        Qmimi per njesi:{' '}
                        {item.product.priceDiscount
                          ? `${Math.round(item.product.priceDiscount)}.00 €`
                          : `${Math.round(item.product.price)}.00 €`}
                      </small>
                      <small>Sasia: {item.quantity}</small>
                    </div>
                    <div className="cartItem_action text-md">
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        onClick={() => handleDeleteCartProduct(item.product.id)}
                      />{' '}
                    </div>
                  </div>
                </MenuItem>
              ))}
              <div
                className="text-gray-500 d-flex w-100 justify-content-center align-items-center py-2"
                style={{ borderTop: '1px solid #ccc' }}
              >
                Total:
                <p className="text-gray-700 fw-bold pl-2">
                  {Math.round(totalPriceWithVAT ? totalPriceWithVAT : 0)}.00 €
                </p>
              </div>
              <div className="buttons d-flex justify-content-center px-4 ">
                <input
                  type="button"
                  value="Shko në shportë"
                  className="cart-button w-100 btn btn-primary btn-primary-hover text-sm"
                  onClick={gotoCart}
                />
              </div>
            </div>
          ) : (
            <MenuItem>Nuk keni ndonje product</MenuItem>
          )
        ) : (
          <div className="bb">
            <div className="userinfo-div">
              <MenuItem
                className={menuItemClassName}
                onClick={() => navigate('/customer/info')}
              >
                <FontAwesomeIcon icon={faUserEdit} />
                Profile info
              </MenuItem>
            </div>
            <MenuItem
              className={menuItemClassName}
              onClick={() => navigate('/customer/orders')}
            >
              <FontAwesomeIcon icon={faReorder} />
              Orders
            </MenuItem>
            <MenuItem
              className={menuItemClassName}
              onClick={() => navigate('/customer/wishlist')}
            >
              <FontAwesomeIcon icon={faHeart} />
              Wishlist
            </MenuItem>
            {user?.role === 'admin' && (
              <>
                <MenuItem
                  className={menuItemClassName}
                  onClick={() => navigate('/admin/create-product')}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  Create product
                </MenuItem>
                <MenuItem
                  className={menuItemClassName}
                  onClick={() => navigate('/admin/return-requests')}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  Return requests
                </MenuItem>
                <MenuItem
                  className={menuItemClassName}
                  onClick={() => navigate('/admin/orders')}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  Client orders
                </MenuItem>
              </>
            )}
            <div className="logout-div">
              <MenuItem className={menuItemClassName} onClick={logout}>
                <FontAwesomeIcon icon={faUserEdit} />
                Logout
              </MenuItem>
            </div>
          </div>
        )}
      </ControlledMenu>
    </>
  )
}

export default CustomDropdown
