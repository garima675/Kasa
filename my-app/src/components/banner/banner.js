import React from "react";

function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__image" src={image} alt="Bannière" />

      <span className="banner__text">{texte}</span>
    </div>
  );
}

export default Banner;
