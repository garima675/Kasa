import React from "react"
import logo_footer from "../../images/logo_footer.png";

const Footer = () => {
    return (
      <footer className="footer">
        <img src={logo_footer} alt="" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
}

export default Footer;