import React, { useState } from "react";
import "/src/styles/DesktopSlider.scss"; // Assuming you have some SCSS for styling

function DesktopSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCards456, setShowCards456] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [cards, setCards] = useState([
    {
      image: "/src/assets/300.jpeg",
      name: "John",
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm. ",
    },
    {
      image: "/src/assets/300 (1).jpeg",
      name: "Jessy",
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm.",
    },
    {
      image: "/src/assets/300 (10).jpeg",
      name: "Kennedy",
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm.",
    },
    {
      image: "/src/assets/image-01.jpg",
      name: "lusy",
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm.",
    },
    {
      image: "/src/assets/image-02.jpg",
      name: "daisy",
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm.",
    },
    {
      image: "/src/assets/image-03.jpg",
      name: "Albert",
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm.",
    },
  ]);

  const handlePrev = () => {
    if (activeIndex === 0) return; // Don't go back if already at the first card
    if (activeIndex === 3) setShowCards456(false); // Hide cards 4, 5, 6 when moving back from 4th card
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex > 1) {
      setShowCards456(true);
    }
    setClickCount((prevCount) => prevCount + 1);
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`carousel-card ${activeIndex === index ? "active" : ""}`}
            style={{
              display: showCards456
                ? index >= 3
                  ? "block"
                  : "none"
                : index < 3
                ? "block"
                : "none",
            }}
          >
            <div
              className={`card-details ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <img src={card.image} alt="image..." />
              <div className="person-name">
                <h2> {card.name}</h2>
                <p className="designation">Designation division</p>
              </div>
              <p className="person-info">{card.name + card.bio}</p>
              <button
                style={{
                  height: "35px",
                  color: "grey",
                  fontSize: "18px",
                  border: "1px solid black",
                }}
              >
                Explore now {">"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${
              activeIndex === index ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
      <button
        className="prev"
        onClick={handlePrev}
        disabled={activeIndex === 0}
      >
        {"<"}
      </button>
      <button
        className="next"
        onClick={handleNext}
        disabled={activeIndex === 5}
      >
        {">"}
      </button>
    </div>
  );
}

export default DesktopSlider;
