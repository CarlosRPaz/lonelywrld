import React from "react";
import "./styles/Footer.css";
import footerLogo from "../img/LWLogo.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <img src={footerLogo} alt="" className="footer__logo" />
      <div className="footer__columns">
        <div className="footer__column">
          <div className="footer__label">Links</div>
          <Link to="/contact" className="footer__link">
            Contact Us
          </Link>
          <Link to="/faq" className="footer__link">
            FAQ
          </Link>
        </div>
        <div className="footer__column">
          <div className="footer__label">Follow Us</div>
          <a
            href="https://www.instagram.com/lonelywrl.d/"
            target="_blank"
            className="footer__IGLogoLink"
          >
            <InstagramIcon className="footer__IGLogo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
