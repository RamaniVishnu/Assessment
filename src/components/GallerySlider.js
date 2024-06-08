import React, { useState } from "react";
import "/src/styles/GallerySlider.scss";

function GallerySlider() {
  return (
    <>
      <div className="grid-container">
        <div className="collage-item1">
          <img src="/src/assets/image-01.jpg" alt="Image 1" />
        </div>
        <div className="collage-item2">
          <img src="/src/assets/image-02.jpg" alt="Image 2" />
          <img src="/src/assets/image-03.jpg" alt="Image 3" />
        </div>
        <div className="collage-item3">
          <img src="/src/assets/image-04.jpg" alt="Image 4" />
        </div>
        <div className="collage-item4">
          <img src="/src/assets/image-05.jpg" alt="Image 5" />
          <img src="/src/assets/image-06.jpg" alt="Image 6" />
        </div>
        <div className="collage-item5">
          <img src="/src/assets/image-07.png" alt="Image 7" />
        </div>
        <div className="collage-item6">
          <img src="/src/assets/image-01.jpg" alt="Image 8" />
          <img src="/src/assets/image-02.jpg" alt="Image 9" />
        </div>
      </div>
    </>
  );
}

export default GallerySlider;
