import React from "react";
import { NavLink } from "react-router-dom";
const navi = () => {
  return (
    <nav classname="header-navi">
      <NavLink
        to="/accueil"
        className="header-navi_nav-link-home"
        activeclassName="active"
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className="header-navi__nav-link-about"
        activeClassName="active"
      >
        A Propos
      </NavLink>
    </nav>
  );
};
export default navi;
