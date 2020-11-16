import React from 'react';
import "./css/buttonGame.css"
import {Link} from "react-router-dom"

const ButtonGame = ({nameGame}) => {
  return (
    <>
    <div className="buttonPositionGame">
    <Link to={`/Game/${nameGame}`} className="buttonNavGame" id="buttonNav">
      Play
    </Link>
    </div>
    </>
  );
}

export default ButtonGame;