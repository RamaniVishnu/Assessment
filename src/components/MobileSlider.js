import React, { useState } from "react";
import "/src/styles/CardSlider.scss";

function MobileSlider() {
  const [cards] = useState([
    {
      image: "/src/assets/300.jpeg",
      name: "John",
      index: 0,
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm. ",
    },
    {
      image: "/src/assets/300 (1).jpeg",
      name: "Jessy",
      index: 1,
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm. ",
    },
    {
      image: "/src/assets/300 (10).jpeg",
      name: "Kennedy",
      index: 2,
      bio: "is the Chief Executive Officer and Managing Director, a leading global IT solutions and consulting firm. ",
    },
  ]);

  const [count, setCount] = useState(0);
  const [leftBtn, setLeftBtn] = useState(true);
  const [rightBtn, setRightBtn] = useState(false);

  const handleBtn = (direction) => {
    if (direction === "left" && count > 0) {
      setCount(count - 1);
      setRightBtn(false);
      if (count - 1 === 0) {
        setLeftBtn(true);
      }
    } else {
      setCount(count + 1);
      setLeftBtn(false);
      if (count + 1 === cards.length - 1) {
        setRightBtn(true);
      }
    }
  };

  return (
    <>
      <div className="carousel-card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {cards
            .filter((card) => card.index === count)
            .map((card) => (
              <div
                style={{ display: "flex" }}
                className="card-details"
                key={card.name}
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
                    marginLeft: "5%",
                    width: "90%",
                  }}
                >
                  Explore now {">"}
                </button>
              </div>
            ))}
        </div>

        <div className="pagination">
          <button
            style={{
              width: "40px",
              fontSize: "45px",
              color: "brown",
              backgroundColor: "white",
              border: 0,
              height: "47px",
              margin: "auto",
            }}
            onClick={() => handleBtn("left")}
            disabled={leftBtn}
          >{`<`}</button>

          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${count === index ? "active" : ""}`}
            ></div>
          ))}

          <button
            style={{
              width: "40px",
              fontSize: "45px",
              color: "brown",
              backgroundColor: "white",
              border: 0,
              height: "47px",
              margin: "auto",
            }}
            onClick={() => handleBtn("right")}
            disabled={rightBtn}
          >{`>`}</button>
        </div>
      </div>
    </>
  );
}

export default MobileSlider;
