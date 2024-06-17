import React from "react";
import Header from "../../components/header/header";
import Banniere from "../../components/banner/banner";
import Footer from "../../components/footer/footer";
import homeBanner from "../../images/homeBanner.png";
const Home = () => {
    return (
      <div className="home">
        <Header />
        <main>
        <Banniere texte="Chez vous, partout et ailleurs" image={homeBanner} />
         
      
        </main>
        <Footer />
    
      </div>
    );
  };
  
  export default Home;