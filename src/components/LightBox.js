import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "/src/styles.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function LightBox({ displayImages, setDisplayImages }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      style={{
        left: 0,
        top: 0,
        display: displayImages ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 999999999,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <div style={{ width: "70%", height: "55%" }}>
        <button
          onClick={() => {
            setDisplayImages(!displayImages);
            document.body.style.overflow = "";
          }}
          style={{
            backgroundColor: "white",
            width: "50px",
            borderRadius: "20px",
            color: "black",
            height: "30px",
            marginBottom: "5px",
            border: "1px solid",
          }}
        >
          Back
        </button>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={false}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="/src/assets/image-01.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-02.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-03.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-04.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-05.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-06.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-07.png" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          loop={false}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/src/assets/image-01.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-02.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-03.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-04.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-05.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-06.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/image-07.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
