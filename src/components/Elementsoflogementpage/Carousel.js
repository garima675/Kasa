import React, { useState } from "react";
import arrowBack from "../../images/arrow_back_.png";
import arrowForward from "../../images/arrow_forward_.png";

function Carrousel({ slides }) {
  // Create a state hook
  const [current, setCurrent] = useState(0); // Define the index of the first slide as 0
  const length = slides.length; // Length of the slides array

  // Function for the next image
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // Go back to the first slide when reaching the last
  };

  // Function for the previous image
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // Go back to the last slide when at the first
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slide">
      {length > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
          <img src={arrowBack} alt="Previous slide" />
        </p>
      )}
      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
          <img src={arrowForward} alt="Next slide" />
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slide__image" />
            )}
            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;
