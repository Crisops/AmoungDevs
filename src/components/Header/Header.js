import React from 'react';
import {Link} from 'react-router-dom'
import "./header.css";
import logo from "./img/logoAmoug.png";

const Header = () => {
  return(
    <>
      <header className="headerContainer">
        <div className="logoImg">
          <h1 className = "logo">DJC' TEAM</h1>
        </div>
        <div className="menuContent">
          <ul>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/Game">
                <span>Game</span>
              </Link> 
            </li>
            <li>
              <Link to="/Contacts">
                <span>Contacts</span>
              </Link>  
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header;