import React from "react";

function Banner({ image, children }) {
  // Determine opacity based on the image source
  const getImageOpacity = (src) => {
    if (src.includes("aboutBanner")) {
      return 0.9;
    } else if (src.includes("homeBanner")) {
      return 0.4;
    }
    return 1; // default opacity if no match
  };

  const imageOpacity = getImageOpacity(image);

  return (
    <div className="banner">
      <div className="banner__overlay"></div>
      <img
        className="banner__image"
        src={image}
        alt="Bannière"
        style={{ opacity: imageOpacity }}
      />
      <span className="banner__text">{children}</span>
    </div>
  );
}

export default Banner;
