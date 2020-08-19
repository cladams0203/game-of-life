import React from "react";
import Grid from "./components/Grid";
import { Container } from "./styles/mainStyles";
import "./App.css";
import Rules from "./components/Rules";
import Presets from "./components/Presets";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid />
        <Container direction={"column"}>
          <Rules />
          <Presets />
        </Container>
      </Container>
    </div>
  );
}

export default App;
