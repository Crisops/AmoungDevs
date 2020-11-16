import React from 'react'
import GameFondo from "../components/GameFondo/GameFondo"
import "./css/GamePage.css"
import Header from "../components/Header/Header"
import OptionGame from "../components/OptionsGame/OptionsGame"

const GamePage = () => {
  return (
    <div className="containerGamePage">
      <br></br>
      <Header/>
      <GameFondo />
      <OptionGame />
    </div>
  )
}

export default GamePage;
