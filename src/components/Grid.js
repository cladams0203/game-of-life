import React, { useState, useEffect } from "react";
import { algo2 } from "../utils/algo2";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import Cells from "./Cells";
import Controls from "./Controls";
import SpeedControls from "./SpeedControls";
import "../styles/grid.scss";

function Grid() {
  const [timer, setTimer] = useState(false);
  const [state, dispatch] = useStateValue(gridContext);
  console.log(state.speed);
  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        algo2(state.grid, dispatch);
      }, state.speed);
    }
  }, [state.grid, timer]);

  return (
    <div className="main-grid">
      <h3>Generations: {state.generations} </h3>
      <SpeedControls />
      <div className="grid">
        {state.grid.map((item, idx1) => {
          return item.map((cell, idx2) => {
            return (
              <Cells
                key={idx1 + idx2}
                handleChange={() =>
                  !timer &&
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
      </div>
      <Controls setTimer={setTimer} />
    </div>
  );
}
export default Grid;
