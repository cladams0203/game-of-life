import React from "react";
import Grid from "./components/Grid";
import { Container } from "./styles/mainStyles";
import "./App.css";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="App">
      <Container direction={"column"}>
        <Grid />
        <Rules />
      </Container>
    </div>
  );
}

export default App;
