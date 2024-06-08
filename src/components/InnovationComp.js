import React, { useState } from "react";
import LightBox from "./LightBox";
import GallerySlider from "./GallerySlider";
import "/src/styles/InnovationComp.scss";

function InnovationComp({ displayImages, setDisplayImages }) {
  const [cards] = useState([
    { image: "/src/assets/image-01.jpg" },
    { image: "/src/assets/image-02.jpg" },
    { image: "/src/assets/image-03.jpg" },
    { image: "/src/assets/image-04.jpg" },
    { image: "/src/assets/image-05.jpg" },
    { image: "/src/assets/image-06.jpg" },
    { image: "/src/assets/image-07.png" },
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
