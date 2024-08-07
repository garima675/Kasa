import React from "react";
import empty from "../../images/star-active 1.png";
import full from "../../images/star-inactive 1.jpg";

function Rate(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-cont">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={empty}
            alt="star"
          />
        ) : (
          <img key={note.toString()} className="etoile" src={full} alt="star" />
        )
      )}
    </div>
  );
}

export default Rate;
