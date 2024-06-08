import React, { useState } from "react";
import LightBox from "./LightBox";
import GallerySlider from "./GallerySlider";
import "../assets/styles/InnovationComp.scss";
import image1 from "../assets/image-01.jpg";
import image2 from "../assets/image-02.jpg";
import image3 from "../assets/image-03.jpg";
import image4 from "../assets/image-04.jpg";
import image5 from "../assets/image-05.jpg";
import image6 from "../assets/image-06.jpg";
import image7 from "../assets/image-07.png";

function InnovationComp({ displayImages, setDisplayImages }) {
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
    <>
      <div className="innovation-container">
        <h1 className="title">Innovation and collective knowledge</h1>
        <p className="about">
          This is an IT services, consulting and business solutions organization
          that has been partnering with many of the world’s largest businesses
          for the past 50 years. We believe innovation and collective knowledge
          can transform all our futures with greater purpose.
        </p>
        <div className="image-container">
          {cards.map((card, index) => (
            <img src={card.image} alt="Images" key={index} />
          ))}
        </div>
        <div className="desktop-box">
          <LightBox
            displayImages={displayImages}
            setDisplayImages={setDisplayImages}
          />
          <GallerySlider />
        </div>
        <div className="explore-button">
        <button
            className="explore-btn-mobile"
          >
            Explore now {">"}
          </button>
          <button
            className="explore-btn"
            onClick={() => {
              setDisplayImages(!displayImages);
              document.body.style.overflow = "hidden";
            }}
          >
            Explore now {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default InnovationComp;
