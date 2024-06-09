import React from "react";


function Banniere({ image }) {
  return (
    <div className="banner">
      <img className="banner__image" src={image} alt="Bannière" />
      
      <span className="banner__text">Chez vous, partout et ailleurs</span>
    </div>
  );
}

export default Banniere;
