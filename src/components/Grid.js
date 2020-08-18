import React, { useState, useEffect } from "react";
import { GridContainer } from "../styles/mainStyles";
import { algorithm } from "../utils/algorithm";
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
        algorithm(state.grid, dispatch);
      }, 300);
    }
  }, [state.grid, timer]);
  console.log(state);
  return (
    <>
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
    </>
  );
}
export default Grid;
