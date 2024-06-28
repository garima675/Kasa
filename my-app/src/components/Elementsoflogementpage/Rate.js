import empty from "../../images/starRempli.png";
import full from "../../images/starVide.png";

function Rate(props) {
  const score = props.score;
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate-cont">
      {stars.map((note) =>
        score >= stars ? (
          <img
            key={stars.toString()}
            className="etoile"
            src={empty}
            alt="star"
          />
        ) : (
          <img
            key={stars.toString()}
            className="etoile"
            src={full}
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rate;
