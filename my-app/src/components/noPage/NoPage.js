import React from "react";
import { NavLink } from "react-router-dom";

function NoPage() {
  return (
    <div className="errorCont">
      <p className="errorCont__No">404</p>
      <p className="errorCont__Txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="errorCont_Link">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default NoPage;
