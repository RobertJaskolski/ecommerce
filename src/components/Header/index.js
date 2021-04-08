import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.scss";
import Logo from "../../assets/logo.png";
import { signOutUserStart } from "../../redux/User/user.actions";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";

const mapState = (state) => {
  return {
    currentUser: state.user["currentUser"],
    totalNumberCartItems: selectCartItemsCount(state),
  };
};

function Header(props) {
  const { currentUser, totalNumberCartItems } = useSelector(mapState);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img alt="Logo" src={Logo} />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          <ul>
            <li>
              <Link to="/cart">Your cart ({totalNumberCartItems})</Link>
            </li>

            {currentUser && [
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>,
              <li>
                <span onClick={signOut}>Logout</span>
              </li>,
            ]}
            {!currentUser && [
              <li>
                <Link to="/registration">Register</Link>
              </li>,
              <li>
                <Link to="/login">Login</Link>
              </li>,
            ]}
          </ul>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  currentUser: null,
};

export default Header;
