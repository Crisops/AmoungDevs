import React from "react";
import { Link } from "react-router-dom";
import "./css/ButtonsNav.css"

const ButtonsNav = () => {
  


  return (
    <>
    <div className="buttonPosition">
    <Link to="" className="buttonNav" id="buttonNav">
        Home
      </Link>
      <Link to="" className="buttonNav" id="buttonNav">
       Contacts
      </Link>
      <Link to="" className="buttonNav" id="buttonNav">
        Game
      </Link>
    </div>
    </>
  );
};

export default ButtonsNav;
