import React from "react"
import { NavLink } from "react-router-dom";
 const navi= () => {
    return(
        <nav classname ="header-navi">
            <NavLink to="#" className="header-navi_nav-link-home">
                Accueil
            </NavLink>
            <NavLink to="#" className="header-navi__nav-link-about">A Propos</NavLink>
        </nav>
    );

 };
 export default  navi;