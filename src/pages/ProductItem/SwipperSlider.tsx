import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./swipperStyle.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Thumbs]);

declare global {
  interface Window {
    thumbsSwiper: any;
  }
}

type sliderPropTypes = {
  images?: [];
  stock: number;
};

const SwipperSlider: React.FC<sliderPropTypes> = ({ images, stock }) => {
  return (
    <>
      <div
        className="mr-6 "
        style={{ width: "50px", height: "400px" }}
        id="thumb-slider"
      >
        <Swiper
          onSwiper={(swiper: any) => (window.thumbsSwiper = swiper)}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          direction="vertical"
          watchSlidesProgress={true}
          className="mySwiper"
          modules={[Navigation, Thumbs]}
        >
          {images?.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={`http://127.0.0.1:5000/img/products/${imageUrl}`}
                alt={`${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-100">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: window.thumbsSwiper }}
          className="mySwiper2"
        >
          {stock < 1 && (
            <div className="position-absolute top-0 sold-out d-flex align-items-center justify-content-center uppercase">
              <span className="text-lg px-2 py-1 rounded bg-gray-100">
                SOLD
              </span>
            </div>
          )}

          {images?.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img
                src={`http://127.0.0.1:5000/img/products/${imageUrl}`}
                alt={`${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwipperSlider;
