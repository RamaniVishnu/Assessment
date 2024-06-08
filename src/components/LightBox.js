import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "/src/styles.scss";
import "../styles.scss"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import image1 from "../assets/image-01.jpg";
import image2 from "../assets/image-02.jpg";
import image3 from "../assets/image-03.jpg";
import image4 from "../assets/image-04.jpg";
import image5 from "../assets/image-05.jpg";
import image6 from "../assets/image-06.jpg";
import image7 from "../assets/image-07.png";

export default function LightBox({ displayImages, setDisplayImages }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [cards] = useState([
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
    { image: image7 },
  ]);
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
          {cards.map((card,index)=>(
            <SwiperSlide>
            <img src={card.image} alt="images..." />
          </SwiperSlide>
          ))}
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
           {cards.map((card,index)=>(
            <SwiperSlide>
            <img src={card.image} alt="images..." />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
