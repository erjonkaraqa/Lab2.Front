import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./swipperStyle.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Img1 from "@/assets/images/productIMG1.png";
import Img1Big from "@/assets/images/Img1Big.png";
import Img2 from "@/assets/images/productIMG2.png";
import Img3 from "@/assets/images/productIMG3.png";
import Img4 from "@/assets/images/productIMG4.png";
import Img5 from "@/assets/images/productIMG5.png";
import Img6 from "@/assets/images/productIMG6.png";
import Img7 from "@/assets/images/productIMG7.png";
import Img8 from "@/assets/images/productIMG8.png";
import Img9 from "@/assets/images/productIMG9.png";
import Img10 from "@/assets/images/productIMG10.png";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

import SwiperCore from "swiper";

SwiperCore.use([Navigation, Thumbs]);

declare global {
  interface Window {
    thumbsSwiper: any;
  }
}

const SwipperSlider = () => {
  return (
    <>
      <div
        className="mr-6 "
        style={{ width: "50px", height: "400px" }}
        id="thumb-slider"
      >
        <Swiper
          onSwiper={(swiper) => (window.thumbsSwiper = swiper)}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          direction="vertical"
          watchSlidesProgress={true}
          className="mySwiper"
          modules={[Navigation, Thumbs]}
        >
          <SwiperSlide>
            <img src={Img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img10} />
          </SwiperSlide>
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
          <SwiperSlide>
            <img src={Img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img10} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwipperSlider;
