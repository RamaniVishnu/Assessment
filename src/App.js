import "./styles.scss";
import { useState } from "react";
import CarouselSlider from "./components/MobileSlider";
import HeaderComp from "./components/HeaderComp";
import CardSlider from "./components/CardSlider";
import InnovationComp from "./components/InnovationComp";
export default function App() {
  const [displayImages, setDisplayImages] = useState(false);
  return (
    <div className="App">
      <HeaderComp />
      <CardSlider />
      <InnovationComp
        displayImages={displayImages}
        setDisplayImages={setDisplayImages}
      />
    </div>
  );
}
