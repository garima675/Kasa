import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NoPage from "../../components/noPage/NoPage";


const Pageerror = () => {
    return (
      <>
        <div className="Pageerror">
          <Header />
          <main>
          <NoPage />
          </main>
          <Footer />
        </div>
      </>
    );
  };
  
  export default Pageerror;
  