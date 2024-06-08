import React, { useState } from "react";
import "./../assets/styles/GallerySlider.scss";
import image1 from "../assets/image-01.jpg";
import image2 from "../assets/image-02.jpg";
import image3 from "../assets/image-03.jpg";
import image4 from "../assets/image-04.jpg";
import image5 from "../assets/image-05.jpg";
import image6 from "../assets/image-06.jpg";
import image7 from "../assets/image-07.png";

function GallerySlider() {
  return (
    <>
      <div className="grid-container">
        <div className="collage-item1">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="collage-item2">
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
        </div>
        <div className="collage-item3">
          <img src={image4} alt="Image 4" />
        </div>
        <div className="collage-item4">
          <img src={image5} alt="Image 5" />
          <img src={image6} alt="Image 6" />
        </div>
        <div className="collage-item5">
          <img src={image7} alt="Image 7" />
        </div>
        <div className="collage-item6">
          <img src={image1} alt="Image 8" />
          <img src={image2} alt="Image 9" />
        </div>
      </div>
    </>
  );
}

export default GallerySlider;
