import React, { useState } from "react";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {length > 1 && (
        <>
          <button className="left-arrow" onClick={prevSlide}>
            &lt;
          </button>
          <button className="right-arrow" onClick={nextSlide}>
            &gt;
          </button>
        </>
      )}
      {slides.map((image, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          {index === current && (
            <>
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
              {length > 1 && (
                <span className="slide-number">
                  {current + 1}/{length}
                </span>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default Carousel;
