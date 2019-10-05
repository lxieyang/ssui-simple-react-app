import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/imgs/star-wars-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container Footer">
      <hr />
      <div className="LogoContainer">
        <Link to={appRoutes.home}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
