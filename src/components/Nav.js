import React from "react";
import "./styles/Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import lwlogo from "../img/LWLogo2.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { Badge, IconButton } from "@material-ui/core";

function Nav({ totalItems }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="nav">
      <div className="nav__contents">
        <Link to="/">
          <img className="nav__logo" src={lwlogo} alt="Lonely Wrld Logo" />
        </Link>

        <Link to="/cart" className="nav__cartLink">
          <IconButton
            aria-label="Show cart items"
            className="nav__cartIconButton"
          >
            <Badge
              badgeContent={totalItems}
              color="error"
              className="nav__badge"
            >
              <ShoppingCartIcon className="nav__cart" />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
