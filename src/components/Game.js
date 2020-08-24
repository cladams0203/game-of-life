import React from "react";
import Rules from "./Rules";
import Grid from "./Grid";
import Presets from "./Presets";
import "../styles/game.scss";

function Game() {
  return (
    <div className="game-container">
      <Grid />
      <Presets />
      <Rules />
    </div>
  );
}
export default Game;
