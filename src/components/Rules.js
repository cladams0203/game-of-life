import React from "react";
import { Container } from "../styles/mainStyles";

function Rules() {
  return (
    <Container width={"70%"} direction={"column"}>
      <p>
        If a cell is "alive" and has 2-3 neighbors it remains alive. Else it
        dies
      </p>
      <p>
        If a cell is "dead" and has exactly 3 neighbors, then it comes to life.
        Else it dies.
      </p>
    </Container>
  );
}

export default Rules;
