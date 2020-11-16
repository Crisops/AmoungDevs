import React from "react";
import "./css/Juegos.css"
import ButtonGame from "../ButtonGame/ButtonGame"

const Juegos = ({logo, name}) => {
  return (
    <div>
      <section className={`containerInfoExtraJuegos`}>
        <div className="gridSection2Juegos">
          <div className="contentSection2ContainerJuegos">
            <div className="containerImagenSection2Juegos">
              <img
                className="logoImagenSection2Juegos"
                id="animadoImg"
                src={logo}
                alt="Imagen2"
              ></img>
            </div>
          </div>
          <div className="containerInfoSection2Juegos">
            <div className="infoSection2Juegos">
              <div className="titleInformation2Juegos" id="animadoTitleNav">
                <h1>{name}</h1>
              </div>
              <div className="descriptionInformation2Juegos" id="animadoDesNav">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
                <ButtonGame nameGame={name}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Juegos;
