import { useParams, Navigate } from "react-router-dom";
import logements from "../../logements.json";
import Rate from "./Rate";
import Host from "./Host";
import Tags from "./Tags";
import Dropdown from "../../components/dropdown/Dropdown";
import Carousel from "./Carousel";

const Displaylogement = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();

  const ficheLogement = logements.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tags key={i} name={tags} />;
  });

  /* Équipements */
  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {ficheLogement ? (
        <div className="Fiche-container">
          <Carousel slides={ficheLogement?.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{ficheLogement?.title}</span>
                  <span className="endroit-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom-prop">
                  <Host
                    name={ficheLogement?.host.name}
                    picture={ficheLogement?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rate score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* dropdown */}
          <div className="description-centent">
            <div className="description-centent__description">
              <Dropdown
                title="Description"
                content={ficheLogement?.description}
              />
            </div>
            <div className="description-centent__equipement">
              <Dropdown title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default Displaylogement;
