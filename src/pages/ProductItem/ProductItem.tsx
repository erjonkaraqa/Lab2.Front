import React, { useEffect, useState } from "react";
import ProductWrapper from "./ProductWrapper";
import AuthorizedSeller from "@/assets/images/appleAuthorized.png";
import BestPrice from "@/assets/images/cmimimeimire.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCreditCard,
  faHeart,
  faShoppingCart,
  faMoneyBillTransfer,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import TebImg from "@/assets/images/teb.png";
import RbkoImg from "@/assets/images/rbko.png";
import SwipperSlider from "./SwipperSlider";
import Breadcrumb from "../Breadcrumb";
import Rating from "react-rating-stars-component";
import RatingModal from "./RatingModal";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useGetRatingWithProductIdQuery } from "@/store/products/RTKProductSlice";
import { getProductWithId } from "@/store/products/productSlice";
import { useLocation } from "react-router-dom";

const FullStar = () => <FontAwesomeIcon icon={faStar} />;

const ProductItem = () => {
  const dispatch = useAppDispatch();
  const id = useLocation().pathname.split("/")[2];
  const [activeProdTitle, setActiveProdTitle] = useState("1");
  const [quantity, setQuantity] = useState<number>(1);
  const { product, loading, error } = useAppSelector((state) => state.products);
  const { data: productRatings } = useGetRatingWithProductIdQuery(id);
  const [ratingsModal, setRatingsModal] = useState<boolean>(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    dispatch(getProductWithId(id));
  }, [dispatch, id]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const productDetailsTitles = [
    { id: "1", title: "Description" },
    { id: "2", title: "Details" },
    { id: "3", title: "Ratings" },
  ];

  return (
    <div className="master-wrapper-content px-2 md:px-0 mx-auto">
      <div className="master-column-wrapper my-6">
        <div className="pt-3">
          <Breadcrumb />
        </div>
        <ProductWrapper className="p-4">
          <div className="d-flex flex-col product-info-all md:flex-row">
            <div
              className="w-100 md:w-50 d-flex align-items-center justify-content-center position-relative md:pr-3"
              id="product-img-wrapper"
            >
              <div className="position-absolute top-0 left-0 md:left-16 d-flex align-items-center justify-content-center z-10">
                <img src={AuthorizedSeller} alt="" style={{ width: "100px" }} />
              </div>

              <span className="w-36 position-absolute top-0 right-0 md:right-6 d-flex align-items-center justify-content-center z-10">
                <img src={BestPrice} alt="" style={{ width: "100px" }} />
              </span>
              <SwipperSlider
                images={product?.images}
                stock={product?.stock ? product.stock : 0}
              />
            </div>

            <div className="overview product-details w-100 md:w-50 text-gray-700 md:pl-3">
              <div className="manufacturers md:grid">
                <span className="value d-flex align-items-center">
                  <a
                    className="text-gray-700 text-xs underline"
                    href={`/search?q=apple`}
                  >
                    {product?.brand}
                  </a>
                </span>
              </div>

              <div className="product-name">
                <h1 className="text-left text-xl pb-1">{product?.title}</h1>

                <div className="text-gray-600 align-items-center d-flex whitespace-nowrap flex-wrap pb-2">
                  <div className="product-reviews-overview d-flex flex-row align-items-center text-sm">
                    <div className="product-no-reviews d-flex align-items-center">
                      <span
                        className="d-flex text-gray-700 cursor-pointer align-items-center text-xs font-medium open-product-review-popup underline"
                        id="add-new-ajax"
                        onClick={() => setRatingsModal(true)}
                      >
                        Rate
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-gray-700 text-left d-flex align-items-center">
                    <i className="separator icon-separator text-[5px] mx-2 d-flex align-items-center text-gray-700 icon-line-height"></i>
                    Warranty:
                    <span className=" ml-1">{product?.warranty}</span>
                  </span>

                  <span className="text-xs font-medium text-gray-700 text-left d-flex align-items-center">
                    <i className="separator icon-separator text-[5px] mx-2 d-flex align-items-center text-gray-700 icon-line-height"></i>
                    Brand origin:
                    <span
                      className="d-flex justify-content-center align-items-center ml-1 rounded-md"
                      style={{ height: "1.2rem", width: "1.2rem" }}
                    >
                      <img
                        className="rounded-md position-relative"
                        src={
                          "https://hhstsyoejx.gjirafa.net/gjirafa50core/flags/us.svg"
                        }
                        title="USA and Canada"
                      />
                    </span>
                  </span>
                </div>
              </div>

              <div className="prices w-100 py-1 d-flex rounded product-price text-gray-700">
                <div className="d-flex flex-col justify-content-start">
                  <div className="d-flex flex-col pr-2">
                    {product && product?.priceDiscount !== null ? (
                      <>
                        <div className="non-discounted-price line-through text-sm text-gray-600 price-without-discount-value-160697">
                          {product?.price?.toFixed(2)} €
                        </div>
                        <div className="min-w-[100px]">
                          <div
                            id="price-value-160697"
                            className="product-price-160697  text-2xl fw-bold text-gray-700 price-value-160697"
                          >
                            {product?.priceDiscount?.toFixed(2)} €
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="min-w-[100px]">
                        <div
                          id="price-value-160697"
                          className="product-price-160697  text-2xl fw-bold text-gray-700 price-value-160697"
                        >
                          {product?.price.toLocaleString("en-US")}.00 €
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex flex-col justify-content-end pl-2 pb-1 text-gray-600 font-medium">
                  <span
                    className="product-discount"
                    style={{ fontSize: "9px" }}
                  >
                    Përfshirë TVSH-në
                  </span>
                  <span style={{ fontSize: "9px" }}>Pa TVSH 450 €</span>
                </div>
              </div>

              {product?.discount !== 0 && (
                <div className="d-flex align-items-center gap-2 text-xs font-medium text-primary build-product-section hidden">
                  <div className="d-flex align-items-center justify-center">
                    You save
                    <span className="ml-1 bg-with-opacity rounded px-1 bundle-discount-value-160697">
                      -{product?.discount} %
                    </span>
                  </div>
                  <span className="hidden bg-primary rounded-md bg-opacity-10 d-flex w-10 align-items-center justify-content-center px-1.5 discount-percentage-value-160697"></span>
                </div>
              )}

              <div className="d-flex align-items-center pt-2 mb-1">
                <span className="qty-label text-xs text-gray-600 whitespace-nowrap">
                  Pagesa me keste
                </span>
                <hr className="w-100 bg-gray-100 ml-2" />
              </div>

              <div
                className="returning-wrapper fieldset mfp-hide rounded d-flex justify-content-start flex-col bg-white w-100 md:w-[600px]"
                id="open-kep-popup"
              ></div>

              <div className="border gap-2 d-flex flex-wrap align-items-center rounded px-2 py-1 font-medium text-xs mt-2 relative">
                <img
                  width="44"
                  src={RbkoImg}
                  alt="Raifeissen Bank"
                  style={{ width: "44px" }}
                />{" "}
                <img
                  width="44"
                  src={TebImg}
                  alt="Teb Bank"
                  style={{ width: "44px" }}
                />{" "}
                deri në 12 këste pa kamatë për vetëm{" "}
                <span className="text-primary font-bold installment-price-value-160697">
                  91.62 €/muaj
                </span>
              </div>

              <div className="w-100 d-flex flex-col pb-2">
                <div className="d-flex align-items-center pt-2 mb-1">
                  <label
                    className="qty-label text-xs text-gray-600"
                    // for="addtocart_160697_AddToCart_EnteredQuantity"
                  >
                    Quantity:
                  </label>
                  <hr className="w-100 bg-gray-100 ml-2" />
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <input
                      type="button"
                      value="-"
                      onClick={decreaseQuantity}
                      className="qtyminus minus rounded-tl rounded-bl outline-none focus:ring-primary bg-white text-gray-600 text-lg border"
                      data-quantity="decrease"
                    />
                    <input
                      type="number"
                      value={quantity}
                      max={product?.stock}
                      pattern="[0-9]"
                      // onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                      id="product_enteredQuantity_160697"
                      className="quantity quantity-in-product border qty outline-none focus:ring-2 focus:ring-primary"
                      aria-label="Shkruani një sasi"
                      data-val="true"
                      data-val-required="The Sasia field is required."
                      name="addtocart_160697.AddToCart.EnteredQuantity"
                    />
                    <input
                      type="button"
                      value="+"
                      className="qtyplus p-0 plus rounded-tr rounded-br outline-none focus:ring-primary bg-white text-gray-600 text-lg border"
                      onClick={increaseQuantity}
                      data-quantity="increase"
                      disabled={
                        quantity >= (product?.stock ? product.stock : 0)
                      }
                    />
                  </div>

                  <div className="availability text-left">
                    <div className="stock d-flex flex-col">
                      <div
                        className="value d-flex"
                        id="stock-availability-value-160697"
                      >
                        <div className="d-flex flex-col pl-2 justify-content-center px-2 bg-with-opacity bg-opacity-1 align-items-center rounded-md ml-2">
                          <span className="text-xs text-primary font-medium">
                            {product?.stock &&
                            (product?.stock ? product?.stock : 0) >= 11
                              ? `Me shume se 10`
                              : (product?.stock ? product?.stock : 0 >= 1) &&
                                (product?.stock ? product?.stock : 0 <= 10)
                              ? `Vetëm edhe ${product?.stock}`
                              : `Nuk ka`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="free-shipping-745"
                className="delivery free-shipping d-flex flex-col pb-2"
              >
                <div className="d-flex align-items-center pt-2 mb-1">
                  <span className="label text-xs text-gray-600">Transport</span>
                  <hr className="w-100 bg-gray-100 ml-2" />
                </div>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex align-items-start">
                    <i className="icon-truck-delivery-shipping text-primary text-2xl p-2 rounded bg-gray-100">
                      <FontAwesomeIcon icon={faTruck} />
                    </i>
                    <div className="d-flex align-items-start flex-wrap">
                      <div className="d-flex flex-col justify-content-center pl-2 text-xs font-medium pr-2 mr-2 tablet:border-r">
                        <div>
                          Product arrival time :<span>- Prishtinë</span>
                        </div>
                        4 nentor - 6 nentor
                        <div></div>
                      </div>
                      <div className="d-flex flex-col justify-content-center pl-2 text-xs font-medium">
                        <div>Kosovë, others</div>
                        <div> 8 nentor - 12 nentor</div>
                      </div>
                    </div>
                  </div>
                  <button className="see-more text-gray-600 hover:text-primary text-xs font-medium d-flex align-items-start whitespace-nowrap">
                    Më shumë
                    <i className="icon-chevron-line-down text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="d-flex flex-col justify-content-center pb-4">
                <div className="d-flex align-items-center pt-2 mb-1">
                  <span className="text-xs text-gray-600 whitespace-nowrap">
                    Save payments
                  </span>
                  <hr className="w-full bg-gray-100 ml-2" />
                </div>
                <div className="d-flex md:flex-row flex-wrap align-items-start align-items-center justify-content-between">
                  <div className="d-flex align-items-center mb-2 md:mb-0 md:mr-2">
                    <i className="icon-paymnet-money-coins-alt rounded bg-gray-100 p-2 text-2xl text-primary">
                      <FontAwesomeIcon icon={faTruck} />
                    </i>
                    <span className="text-xs pl-2 font-medium whitespace-nowrap">
                      Pay in cash
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2 md:mb-0 md:mr-2">
                    <i className="icon-payment-credit-card-alt rounded bg-gray-100 p-2 text-2xl text-primary">
                      <FontAwesomeIcon icon={faCreditCard} />
                    </i>
                    <span className="text-xs pl-2 font-medium whitespace-nowrap">
                      Pay online
                    </span>
                  </div>
                  <div className="d-flex align-items-center md:mr-2">
                    <i className="icon-paymennt-credit-cards rounded bg-gray-100 p-2 text-2xl text-primary">
                      <FontAwesomeIcon icon={faMoneyBillTransfer} />
                    </i>
                    <span className="text-xs pl-2 font-medium whitespace-nowrap">
                      Pay with bank transfer
                    </span>
                  </div>
                </div>
              </div>

              {(product?.stock ? product?.stock : 0) >= 1 && (
                <div
                  id="product-overview-buttons"
                  className="overview-buttons d-flex bg-white w-100 px-2 right-0 md:px-0 fixed md:relative bottom-0 z-50 pt-3 pb-3 md:mb-0 md:py-0 gap-4 justify-content-end"
                >
                  <button
                    type="button"
                    id="buy-now-btn"
                    className="btn btn-primary btn-primary-hover w-100 focus:outline-none d-flex justify-content-center align-items-center gap-2 text-sm"
                  >
                    <i className="icon-check-badge text-2xl d-flex align-items-center justify-content-center gap-2 icon-line-height">
                      <FontAwesomeIcon icon={faCheck} />
                    </i>
                    <span className="uppercase text-xs md:text-sm">
                      Blej tani
                    </span>
                  </button>
                  <button
                    type="button"
                    id="add-to-cart-button"
                    className="w-100 add-to-cart-button btn btn-secondary btn-secondary-hover md:w-100 focus:outline-none d-flex justify-content-center"
                    data-productid="160697"
                    aria-label="Shto në shportë"
                  >
                    <i className="icon-cart-shopping-add text-2xl icon-line-height">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </i>
                    <span className="text-xs md:text-sm hidden md:flex ml-2">
                      Shto në shportë
                    </span>
                  </button>
                  <button
                    type="button"
                    id="add-to-wishlist-button"
                    className="add-to-wishlist-button btn btn-secondary btn-secondary-hover focus:outline-none hidden md:flex align-items-center"
                  >
                    <i className="icon-heart text-2xl icon-line-height">
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </ProductWrapper>
        <ProductWrapper className="p-0">
          <div id="details" className="all-details__div">
            <ul className="product-details__tab">
              {productDetailsTitles.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setActiveProdTitle(item.id)}
                  className={activeProdTitle === item.id ? "active" : ""}
                >
                  <a>{item.title}</a>
                </li>
              ))}
            </ul>

            <div className="product-details__content p-3 md:p-6">
              {activeProdTitle === "1" && (
                <div className="tab1 text-sm">{product?.description}</div>
              )}
              {activeProdTitle === "2" && (
                <div className="d-flex flex-col position-relative">
                  <div
                    className="grid grid-cols-1  md:grid-cols-2"
                    id="product-specifications-split-page"
                  >
                    {product?.details.map((product, index) => (
                      <div className="d-flex flex-grow" key={index}>
                        <div className="spec-name pl-2 py-2 m-0 text-xs text-left font-medium">
                          {product.key}:
                        </div>
                        <div className="spec-value py-2 m-0 text-xs">
                          {product.value}{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeProdTitle === "3" && (
                <div className="product-reviews">
                  <div className="d-flex pb-6 justify-content-around border-b">
                    <div className="d-flex align-items-center text-center flex-col ratingsAndReviews">
                      <span className="text-primary text-4xl font-bold md:mb-0 d-flex align-items-center">
                        {productRatings?.length}
                        <i className="icon-star text-sm">
                          <FullStar />
                          {/* <FontAwesomeIcon /> */}
                        </i>
                      </span>
                      <p>{productRatings?.length} Ratings</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        id="display-product-review-modal"
                        onClick={() => setRatingsModal(true)}
                        className="btn text-primary border rounded border-primary  hover:bg-primary transition-all duration-150 hover:text-white text-sm open-product-review-popup"
                      >
                        Shto vlerësimin tuaj
                      </button>
                    </div>
                  </div>
                  <div className="product-review-list">
                    {productRatings?.map((productItem, index) => (
                      <div className="product-review-item mt-4" key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="inline-block text-base font-semibold capitalize-first-letter">
                            {typeof productItem.productID === "string"
                              ? ""
                              : productItem.productID.title}{" "}
                          </span>
                          <Rating
                            count={5}
                            size={24}
                            value={productItem.rating}
                            color="#ccc"
                            edit={false}
                            activeColor="#f8b400"
                            char={FullStar}
                          />
                        </div>
                        <div className="review-item-head d-flex align-items-center divide-dashed">
                          <span className="pr-1 text-xs capitalize-first-letter">
                            Test name
                          </span>
                          <span className="text-xs text-gray-700">
                            22.10.2023 11:48 e paradites
                          </span>
                        </div>
                        <div className="review-content text-left">
                          <div className="review-text flex items-center my-2">
                            <div className="text-body capitalize-first-letter flex-grow text-sm">
                              {productItem.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="d-flex flex-col position-relative">
                <div
                  className="grid grid-cols-1  md:grid-cols-2"
                  id="product-specifications-split-page"
                >
                  <div className="d-flex flex-grow">
                    <div className="spec-name pl-2 py-2 m-0 text-xs text-left font-medium">
                      key:
                    </div>
                    <div className="spec-value py-2 m-0 text-xs">value</div>
                  </div>
                </div>
              </div>
              {activeProdTitle === "3" && (
                <div className="product-reviews">
                  <div className="d-flex pb-6 justify-content-around border-b">
                    <div className="d-flex align-items-center text-center flex-col ratingsAndReviews">
                      <span className="text-primary text-4xl font-bold md:mb-0 d-flex align-items-center">
                        5
                        <i className="icon-star text-sm">
                          <FullStar />
                          {/* <FontAwesomeIcon /> */}
                        </i>
                      </span>
                      <p>5 Ratings</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        id="display-product-review-modal"
                        onClick={() => setRatingsModal(true)}
                        className="btn text-primary border rounded border-primary  hover:bg-primary transition-all duration-150 hover:text-white text-sm open-product-review-popup"
                      >
                        Shto vlerësimin tuaj
                      </button>
                    </div>
                  </div>
                  <div className="product-review-list">
                    <div className="product-review-item mt-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="inline-block text-base font-semibold capitalize-first-letter">
                          title
                        </span>
                      </div>
                      <div className="review-item-head d-flex align-items-center divide-dashed">
                        <span className="pr-1 text-xs capitalize-first-letter">
                          name
                        </span>
                        <span className="text-xs text-gray-700">
                          22.10.2023 11:48 e paradites
                        </span>
                      </div>
                      <div className="review-content text-left">
                        <div className="review-text flex items-center my-2">
                          <div className="text-body capitalize-first-letter flex-grow text-sm">
                            description
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ProductWrapper>

        {ratingsModal && (
          <RatingModal
            show={ratingsModal}
            onHide={() => setRatingsModal(false)}
            userID={"test1"}
            productID={id}
          />
        )}
      </div>
    </div>
  );
};

export default ProductItem;
