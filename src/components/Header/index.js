import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.scss";
import Logo from "../../assets/logo.png";
import { auth } from "../../firebase/utils";

function Header(props) {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img alt="Logo" src={Logo} />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Logout
                </span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user["currentUser"],
  };
};
export default connect(mapStateToProps, null)(Header);
