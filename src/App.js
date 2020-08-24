import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import GameHistory from "./components/GameHistory";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container" justify={"center"}>
        <Switch>
          <Route path="/game-history">
            <GameHistory />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
