import React from "react";
import Navigation from "../Navigation/Navigation";

import "./Burger.css";

function Burger() {
  const popup = document.querySelector(".burger");

  function handlePopupClose(e) {
    if (
      e.target.classList.contains("burger") ||
      e.target.classList.contains("burger__close-menu")
    ) {
      popup.classList.remove("burger_opened");
    }
  }

  return (
    <div className="burger" onClick={handlePopupClose}>
      <div className="burger__container">
        <Navigation isLogged={true} />
        <button
          className="burger__close-menu"
          onClick={handlePopupClose}
        ></button>
      </div>
    </div>
  );
}

export default Burger;
