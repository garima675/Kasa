import React from "react";

function Banner({ image, children }) {
  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img className="banner__image" src={image} alt="Bannière" />

      <span className="banner__text">{children}</span>
    </div>
  );
}

export default Banner;
