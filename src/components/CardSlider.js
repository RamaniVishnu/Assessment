import React from "react";
import DesktopSlider from "./DesktopSlider";
import MobileSlider from "./MobileSlider";
import "/src/styles/CardSlider.scss";
import "/src/styles/MobileSlider.scss";

function CardSlider() {
  return (
    <>
      <div className="card-slider">
        <h1 className="chief-designation">Board of Directors</h1>
        <p className="organization-goal">
          We make a difference beyond our own business and those of our clients,
          ensuring our actions and what we do together, empower people and
          communities to achieve more and live better lives.{" "}
        </p>
        <div className="mobile-cards">
          <MobileSlider />
        </div>
        <div className="desktop-cards">
          <DesktopSlider />
        </div>
      </div>
    </>
  );
}

export default CardSlider;
