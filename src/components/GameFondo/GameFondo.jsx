import React from 'react';
import "./css/gameFondo.css"
import logo from "./img/main.png"

const GameFondo = () => {
  return (
    <div className="containerImgFondo">
      <img className="gameSelect" src={logo} alt="Game"></img>
    </div>
  );
}

export default GameFondo;