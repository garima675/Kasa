import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Displaylogement from "../../components/Elementsoflogementpage/Displaylogement";

const Logementpage = () => {
  return (
    <div classname="logement">
      <Header />
      <main>
        <Displaylogement />
      </main>
      <Footer />
    </div>
  );
};
export default Logementpage;
