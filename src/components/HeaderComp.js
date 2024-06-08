import React from "react";
import "/src/styles/HeaderComp.scss";

function HeaderComp() {
  return (
    <div>
      <div className="video-container">
        <video src="/src/assets/video_01.mp4" autoPlay muted />
        <div className="overlay">
          <div className="overlay-content">
            <h1>
              Lorem ipsum <span style={{ color: "#8B0000" }}>dolor</span>
            </h1>
            <button className="btn-one">
              Explore{" "}
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  paddingLeft: "10px",
                }}
              >
                &gt;
              </span>
            </button>
            <button className="brn-two">
              Explore{" "}
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  paddingLeft: "10px",
                }}
              >
                &gt;
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComp;
