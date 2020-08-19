import React from "react";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import { addPreset } from "../store/gridActions";
import { GridContainer, Container } from "../styles/mainStyles";
import { scrubberArray, roteightor } from "../utils/presetArrays";
import Cells from "./Cells";

function Presets() {
  const [state, dispatch] = useStateValue(gridContext);
  return (
    <Container direction={"column"}>
      <h4>Scrubber</h4>
      <GridContainer>
        {scrubberArray.map((item, idx1) => {
          return item.map((sub, idx2) => {
            return (
              <Cells
                key={idx1 + idx2}
                pos1={idx1}
                pos2={idx2}
                value={sub}
                row={idx1}
                col={idx2}
              />
            );
          });
        })}
      </GridContainer>
      <button onClick={() => addPreset(dispatch, state.grid, scrubberArray)}>
        select
      </button>
      <h4>Roteightor</h4>
      <GridContainer>
        {roteightor.map((item, idx1) => {
          return item.map((sub, idx2) => {
            return (
              <Cells
                key={idx1 + idx2}
                pos1={idx1}
                pos2={idx2}
                value={sub}
                row={idx1}
                col={idx2}
              />
            );
          });
        })}
      </GridContainer>
      <button onClick={() => addPreset(dispatch, state.grid, roteightor)}>
        select
      </button>
    </Container>
  );
}

export default Presets;
