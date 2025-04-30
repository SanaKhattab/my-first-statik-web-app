import React from "react";
import { Link } from "react-router-dom"; // 👈 Importera Link!

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src="img/logo.png" alt="Svalans Pizzeria Logo" className="logo" />

        <input type="checkbox" id="side-menu" className="side-menu" />
        <label htmlFor="side-menu" className="hamb">
          <span className="hamb-line"></span>
        </label>

        <nav className="topnav">
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/meny">Meny</Link>
            </li>
            <li>
              <Link to="/hitta">Hitta oss</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakta oss</Link>{" "}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
