import React from "react";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import { addPreset } from "../store/gridActions";
import { GridContainer, Container } from "../styles/mainStyles";
import { scrubberArray, roteightor, r2d2, pulsar } from "../utils/presetArrays";

function Presets() {
  const [state, dispatch] = useStateValue(gridContext);
  return (
    <Container width={"80%"} wrap={"wrap"} style={{ border: "2px solid red" }}>
      <h2 className="preset-heading">Preset Patterns</h2>
      <Container
        direction={"column"}
        width={"40%"}
        style={{ border: "2px solid red" }}
      >
        <h4>Scrubber</h4>
        <GridContainer>
          {scrubberArray.map((item, idx1) => {
            return item.map((sub, idx2) => {
              return (
                <div
                  key={idx1 + idx2}
                  className="preset-cells"
                  style={{
                    backgroundColor: sub ? "yellow" : "black",
                    gridColumn: idx2 + 1,
                    gridRow: idx1 + 1,
                  }}
                ></div>
              );
            });
          })}
        </GridContainer>
        <button onClick={() => addPreset(dispatch, state.grid, scrubberArray)}>
          select
        </button>
      </Container>
      <Container direction={"column"} width={"40%"}>
        <h4>Roteightor</h4>
        <GridContainer>
          {roteightor.map((item, idx1) => {
            return item.map((sub, idx2) => {
              return (
                <div
                  className="preset-cells"
                  key={idx1 + idx2}
                  style={{
                    backgroundColor: sub ? "yellow" : "black",
                    gridColumn: idx2 + 1,
                    gridRow: idx1 + 1,
                  }}
                ></div>
              );
            });
          })}
        </GridContainer>
        <button onClick={() => addPreset(dispatch, state.grid, roteightor)}>
          select
        </button>
      </Container>
      <Container direction={"column"} width={"40%"}>
        <h4>R2D2</h4>
        <GridContainer>
          {r2d2.map((item, idx1) => {
            return item.map((sub, idx2) => {
              return (
                <div
                  className="preset-cells"
                  key={idx1 + idx2}
                  style={{
                    backgroundColor: sub ? "yellow" : "black",
                    gridColumn: idx2 + 1,
                    gridRow: idx1 + 1,
                  }}
                ></div>
              );
            });
          })}
        </GridContainer>
        <button onClick={() => addPreset(dispatch, state.grid, r2d2)}>
          select
        </button>
      </Container>
      <Container direction={"column"} width={"40%"}>
        <h4>Pulsar</h4>
        <GridContainer>
          {pulsar.map((item, idx1) => {
            return item.map((sub, idx2) => {
              return (
                <div
                  className="preset-cells"
                  key={idx1 + idx2}
                  style={{
                    backgroundColor: sub ? "yellow" : "black",
                    gridColumn: idx2 + 1,
                    gridRow: idx1 + 1,
                  }}
                ></div>
              );
            });
          })}
        </GridContainer>
        <button onClick={() => addPreset(dispatch, state.grid, pulsar)}>
          select
        </button>
      </Container>
    </Container>
  );
}

export default Presets;
