import React from "react";
import "./css/sectionHome.css";
import logo from "./img/logoAmoug.png";
const Section = () => {
  return (
    <>
    <div className="containerSection">
      <div className="positionMessage">
        <div className="messageGroup">
          <h1 className="titlePresentation titleW">W</h1>
          <h1 className="titlePresentation titleE1">E</h1>
          <h1 className="titlePresentation titleL">L</h1>
          <h1 className="titlePresentation titleC">C</h1>
          <h1 className="titlePresentation titleO">O</h1>
          <h1 className="titlePresentation titleM">M</h1>
          <h1 className="titlePresentation titleE">E</h1>
          {/* <p className="descriptionPresentation">
            
          </p> */}
        </div>
      </div>
      <div className="logoTeam">
        <img className="logoImagen" src={logo} alt="Logo"></img>
      </div>
    </div>
    </>
  );
};

export default Section;
