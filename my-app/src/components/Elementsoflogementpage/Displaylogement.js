import { useParams, Navigate } from "react-router-dom";
import logements from "../../logements.json";
import Rate from "./Rate";
import Host from "./Host";
import Tags from "./Tags";
import Dropdown from "../../components/dropdown/Dropdown";
import Carousel from "./Carousel";

const Displaylogement = () => {
  const { id } = useParams();

  const ficheLogement = logements.find((logements) => logements.id === id);

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
        <div className="pictures-container">
          <Carousel slides={ficheLogement?.pictures} />
          <section className="Fiche-logement">
            <div className="description-information">
              <div className="description-information__titletags">
                <div className="description-information__titletags__title">
                  <span className="title-logement">{ficheLogement?.title}</span>
                  <span className="place-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-information__owner">
                {/* Host */}
                <div className="description-information__owner__name">
                  <Host
                    name={ficheLogement?.host.name}
                    picture={ficheLogement?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__owner__rate">
                  <Rate score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* dropdown */}
          <div className="description-logement">
            <div className="description-logement__description">
              <Dropdown
                title="Description"
                content={ficheLogement?.description}
              />
            </div>
            <div className="description-logement__equipement">
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
