import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Burger.css";

function Burger({ loggedIn, burgerMenuOpen, burgerMenuClose }) {

  return (
    <div className="burger" onClick={burgerMenuClose}>
      <div className="burger__container">
        <Navigation
          loggedIn={loggedIn}
          burgerMenuOpen={burgerMenuOpen}
          burgerMenuClose={burgerMenuClose}
        />
        <button
          className="burger__close-menu"
          onClick={burgerMenuClose}
        ></button>
      </div>
    </div>
  );
}

export default Burger;
