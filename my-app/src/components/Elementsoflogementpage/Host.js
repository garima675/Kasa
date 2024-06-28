import React from "react";

function Host(props) {
  return (
    <>
      <span className="name-owner">{props.name}</span>
      <img className="photo-owner" src={props.picture} alt="owner" />
    </>
  );
}

export default Host;
