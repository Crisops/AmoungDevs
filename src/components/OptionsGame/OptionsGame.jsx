import React from 'react';
import "./css/OptionsGame.css"
import Juegos from "../Juegos/Juegos"
import logoReactor from "./img/reactor.png"
import logoUpperEngine from "./img/topEngine.png"
import logoLowerEngine from "./img/lowerEngine.png"
import logoSecurity from "./img/security.png"
import logoMedical from "./img/medical.png"
import logoElectricity from "./img/electricity.png"
import logoCafeteria from "./img/cafeteria.png"
import logoStorage from "./img/warehouse.png"
import logoAdmin from "./img/administration.png"
import logoCommunications from "./img/communications.png"
import logoO2 from "./img/o2.png"
import logoShields from "./img/shields.png"
import logoNavigation from "./img/navigation.png"
import logoWeapons from "./img/armory.png"

const OptionsGame = () =>{
  return (
    <>
    <div className="containerOptionsGame">
      <div className="positionOpstionsGame">
      <ul>
          <li>
            <a href="#reactor"><span className="optionNavGame1">Reactor</span></a>
          </li>
          <li>
            <a href="#upper"><span className="optionNavGame2">Upper Engine</span></a>
          </li>
          <li>
            <a href="#lower"><span className="optionNavGame3">Lower Engine</span></a>
          </li>
          <li>
            <a href="#security"><span className="optionNavGame4">Security</span></a>
          </li>
          <li>
            <a href="#medical"><span className="optionNavGame5">Medbay</span></a>
          </li>
          <li>
            <a href="#electricity"><span className="optionNavGame6">Electrical</span></a>
          </li>
          <li>
            <a href="#cafeteria"><span className="optionNavGame7">Cafeteria</span></a>
          </li>
          <li>
            <a href="#storage"><span className="optionNavGame8">Storage</span></a>
          </li>
          <li>
            <a href="#admin"><span className="optionNavGame9">Admin</span></a>
          </li>
          <li>
            <a href="#communication"><span className="optionNavGame10">Communication</span></a>
          </li>
          <li>
            <a href="#o2"><span className="optionNavGame11">O2</span></a>
          </li>
          <li>
            <a href="#weapons"><span className="optionNavGame12">Weapons</span></a>
          </li>
          <li>
            <a href="#shields"><span className="optionNavGame13">Shields</span></a>
          </li>
          <li>
            <a href="#nav"><span className="optionNavGame14">Navigation</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div id="reactor" className="secReactor">
        <Juegos logo={logoReactor} name="Reactor"/>
      </div>
      <div id="upper">
      <Juegos logo={logoUpperEngine} name="Upper Engine"/>
      </div>
      <div id="lower">
      <Juegos logo={logoLowerEngine} name="Lower Engine"/>
      </div>
      <div id="security">
      <Juegos logo={logoSecurity} name="Security"/>
      </div>
      <div id="medical">
      <Juegos logo={logoMedical} name="Medical"/>
      </div>
      <div id="electricity">
      <Juegos logo={logoElectricity} name="Electricity"/>
      </div>
      <div id="nav">
      <Juegos logo={logoNavigation} name="Navigation"/>
      </div>
      <div id="shields">
      <Juegos logo={logoShields} name="Shields"/>
      </div>
      <div id="communication">
      <Juegos logo={logoCommunications} name="Communication"/>
      </div>
      <div id="storage">
      <Juegos logo={logoStorage} name="Storage"/>
      </div>
      <div id="cafeteria">
      <Juegos logo={logoCafeteria} name="Cafeteria"/>
      </div>
      <div id="admin">
      <Juegos logo={logoAdmin} name="Administration"/>
      </div>
      <div id="weapons">
      <Juegos logo={logoWeapons} name="Weapons"/>
      </div>
      <div id="o2">
      <Juegos logo={logoO2} name="O2"/>
      </div>
    </div>
    </>
  );
}

export default OptionsGame;