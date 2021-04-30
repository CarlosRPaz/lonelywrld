import React from "react";
import "./styles/Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import lwlogo from "../img/LWLogo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Nav() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="nav">
      <div className="nav__contents">
        <Link to="/">
          <img className="nav__logo" src={lwlogo} alt="Lonely Wrld Logo" />
        </Link>
        <p className="nav__cartNum">{basket?.length}</p>
        <Link to="/cart">
          <ShoppingCartIcon className="nav__cart" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
