import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img alt="Logo" src={Logo} />
          </Link>
        </div>

        <dvi className="callToActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </dvi>
      </div>
    </header>
  );
}

export default Header;
