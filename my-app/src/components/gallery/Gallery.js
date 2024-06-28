import React from "react";
import { Link } from "react-router-dom";
import logements from "../../logements.json";
import Cards from "../card/Cards";

const Gallery = () => {
  return (
    <div className="home_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Cards image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
