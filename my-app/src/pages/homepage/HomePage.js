import React from "react";
import Header from "../../components/header/Header";
import Banniere from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import homeBanner from "../../images/homeBanner.png";
import Gallery from "../../components/gallery/Gallery";
const Home = () => {
    return (
      <div className="home">
        <Header />
        <main>
        <Banniere texte="Chez vous, partout et ailleurs" image={homeBanner} />
        <Gallery/>
         </main>
        <Footer />
    </div>
    );
  };
  
  export default Home;