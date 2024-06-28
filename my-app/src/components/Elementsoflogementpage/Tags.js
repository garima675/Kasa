import React from "react";

function Tag({ name }) {
  return (
    <div className="tag-contnr">
      <span className="tag-container__btn">{name}</span>
    </div>
  );
}

export default Tag;
