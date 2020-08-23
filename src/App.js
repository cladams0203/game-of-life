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
      <diz className="container" justify={"center"}>
        <Switch>
          <Route path="/game-history">
            <GameHistory />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </diz>
    </div>
  );
}

export default App;
