import React from "react";
import "./css/sectionHome.css";
import logo from "./img/logoAmoug.png";
const Section = () => {
  return (
    <>
    <div className="containerSection">
      <div className="positionMessage">
        <div className="messageGroup">
          <h1 className="titlePresentation">WELCOME</h1>
          <p className="descriptionPresentation">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
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
