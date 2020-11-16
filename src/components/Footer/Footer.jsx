import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import "./css/footerHome.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="positionRedes">
        <div className="iconsCenter">
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank" className="listFacebook"><FontAwesomeIcon icon={faFacebook} /></a> 
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" className="listTwitter"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" className="listInstagram"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li>
              <a href="https://co.linkedin.com/" target="_blank" className="listLinkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li>
              <a href="https://www.googleplus.com" target="_blank" className="listGooglePlus"><FontAwesomeIcon icon={faGooglePlus} /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyRightFooter">
        <span>Cristian Pérez | David Lozano | JairoRomero</span>
        <span>© 2020 Copyright: DJC TEAM</span>
      </div>
    </div>
  );
};

export default Footer;
