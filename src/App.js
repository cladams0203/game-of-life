import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "./styles/mainStyles";
import "./App.css";
import GameHistory from "./components/GameHistory";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container justify={"center"} style={{ border: "2px solid green" }}>
        <Switch>
          <Route path="/game-history">
            <GameHistory />
          </Route>
          <Route path="/">
            <Game />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
