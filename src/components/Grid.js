import React, { useState, useEffect } from "react";
import { GridContainer } from "../styles/mainStyles";
import { algorithm } from "../utils/algorithm";
import { algo2 } from "../utils/algo2";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import Cells from "./Cells";
import Controls from "./Controls";
import { scrubberArray } from "../utils/presetArrays";

function Grid() {
  const [timer, setTimer] = useState(false);
  const [state, dispatch] = useStateValue(gridContext);

  // const test = [...state.grid];
  // const splitPoint = Math.floor(test.length / 2);
  // const sub = test.slice(0, splitPoint - 7);
  // const sub2 = test.slice(splitPoint + 8);
  // const test2 = [...scrubberArray];
  // const adder = Math.floor((test.length - test2.length) / 2);
  // const newPreset = test2.map((item) => {
  //   const front = new Array(adder).fill(false);
  //   const back = new Array(test.length - adder - test2.length).fill(false);
  //   return front.concat(item, back);
  // });

  // console.log(test.length - adder - test2.length);
  // console.log([1, 2, 3].concat([4, 5, 6]));
  // console.log(sub.concat(newPreset, sub2));

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        algo2(state.grid, dispatch);
      }, 300);
    }
  }, [state.grid, timer]);
  console.log(state.grid);

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
