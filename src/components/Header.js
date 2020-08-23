import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/header.scss";

function Header() {
  const history = useHistory();

  return (
    <div className="header">
      <h1 className="heading">Conway's Game of Life</h1>
      <p onClick={() => history.push("/")} className="links">
        Home
      </p>
      <p onClick={() => history.push("/game-history")} className="links">
        Game Info
      </p>
    </div>
  );
}
export default Header;
