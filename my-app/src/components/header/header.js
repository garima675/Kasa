import logo from "../../images/LOGO.svg";
import Navi from "../navi/Navi";

export default function Header() {
    return (
      <header className="header">
        <figure className="header__fig">
          <img className="logo" src={logo} alt="logo de l'agence kasa" />
        </figure>
        <Navi className="nav-header" />
      </header>
    );
  }