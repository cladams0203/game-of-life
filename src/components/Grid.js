import React, { useState, useEffect } from "react";
import { GridContainer, Container } from "../styles/mainStyles";
import { algo2 } from "../utils/algo2";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import Cells from "./Cells";
import Controls from "./Controls";

function Grid() {
  const [timer, setTimer] = useState(false);
  const [state, dispatch] = useStateValue(gridContext);

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        algo2(state.grid, dispatch);
      }, 300);
    }
  }, [state.grid, timer]);

  return (
    <Container
      direction={"column"}
      width={"50%"}
      style={{ border: "2px solid red" }}
    >
      <h2>Generations: {state.generations} </h2>
      <GridContainer>
        {state.grid.map((item, idx1) => {
          return item.map((cell, idx2) => {
            return (
              <Cells
                key={idx1 + idx2}
                handleChange={() =>
                  dispatch({
                    type: "HANDLE_CHANGE",
                    payload: { pos1: idx1, pos2: idx2 },
                  })
                }
                pos1={idx1}
                pos2={idx2}
                value={cell}
                row={idx1}
                col={idx2}
              ></Cells>
            );
          });
        })}
      </GridContainer>
      <Controls setTimer={setTimer} />
    </Container>
  );
}
export default Grid;
