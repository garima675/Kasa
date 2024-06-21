import React from "react";
import Footer from "../../components/footer/Footer";
import Banniere from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
import aboutBanner from "../../images/aboutBanner.png";
import Header from "../../components/header/Header";

const About = () => {
    return(
        <div className="aboutpage">
            <Header/>
            <main>
                <Banniere image ={aboutBanner}/>

                <div className="dropdown ">
                    <div className="dropdown_area">
            <Dropdown title="Fiabilite" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
            <Dropdown title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.." />
            <Dropdown title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Dropdown title="Securite" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.." />
                        

                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
export default About;
