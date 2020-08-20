import React from "react";
import Rules from "./Rules";
import Grid from "./Grid";
import Presets from "./Presets";
import { Container } from "../styles/mainStyles";

function Game() {
  return (
    <Container
      align={"flex-start"}
      justify={"space-around"}
      style={{ border: "2px solid red" }}
    >
      <Grid />
      <Container direction={"column"} width={"50%"}>
        <Presets />
        <Rules />
      </Container>
    </Container>
  );
}
export default Game;
