import React, { useState } from "react";
import { GridContainer } from "../styles/mainStyles";
import Cells from "./Cells";

const testArray = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
];

function Grid() {
  const [grid, setGrid] = useState(testArray);
  let newGrid = [];
  console.log(newGrid);
  const handleChange = (pos1, pos2) => {
    console.log("hey");
    setGrid(
      grid.map((item, idx) => {
        return item.map((sub, index) => {
          if (idx === pos1 && index === pos2) {
            return !sub;
          } else {
            return sub;
          }
        });
      })
    );
  };

  const algorithm = () => {
    grid.forEach((item, index) => {
      const newSub = [];
      console.log(newSub);
      item.forEach((sub, idx) => {
        let neighbors = 0;
        //Upper sub array logic
        if (index === 0) {
          if (idx === 0) {
            if (item[idx + 1]) {
              neighbors++;
            }
            if (grid[index + 1][idx]) {
              neighbors++;
            }
            if (grid[index + 1][idx + 1]) {
              neighbors++;
            }
          } else if (idx === sub.length - 1) {
            if (item[idx - 1]) {
              neighbors++;
            }
            if (grid[index + 1][idx]) {
              neighbors++;
            }
            if (grid[index + 1][idx - 1]) {
              neighbors++;
            }
          } else {
            if (item[idx - 1]) {
              neighbors++;
            }
            if (item[idx + 1]) {
              neighbors++;
            }
            if (grid[index + 1][idx - 1]) {
              neighbors++;
            }
            if (grid[index + 1][idx]) {
              neighbors++;
            }
            if (grid[index + 1][idx + 1]) {
              neighbors++;
            }
          }
        }
        //Lower sub array logic
        if (index === grid.length - 1) {
          if (idx === 0) {
            if (item[idx + 1]) {
              neighbors++;
            }
            if (grid[index - 1][idx]) {
              neighbors++;
            }
            if (grid[index - 1][idx + 1]) {
              neighbors++;
            }
          } else if (idx === sub.length - 1) {
            if (item[idx - 1]) {
              neighbors++;
            }
            if (grid[index - 1][idx]) {
              neighbors++;
            }
            if (grid[index - 1][idx - 1]) {
              neighbors++;
            }
          } else {
            if (item[idx - 1]) {
              neighbors++;
            }
            if (item[idx + 1]) {
              neighbors++;
            }
            if (grid[index - 1][idx - 1]) {
              neighbors++;
            }
            if (grid[index - 1][idx]) {
              neighbors++;
            }
            if (grid[index - 1][idx + 1]) {
              neighbors++;
            }
          }
        }
        // Interior array logic
        if (index > 0 && index < grid.length - 1) {
          if (idx === 0) {
            if (item[idx + 1]) {
              neighbors++;
            }
            if (grid[index - 1][idx]) {
              neighbors++;
            }
            if (grid[index - 1][idx + 1]) {
              neighbors++;
            }
          } else if (idx === sub.length - 1) {
            if (item[idx - 1]) {
              neighbors++;
            }
            if (grid[index - 1][idx]) {
              neighbors++;
            }
            if (grid[index - 1][idx - 1]) {
              neighbors++;
            }
          } else {
            if (item[idx - 1]) {
              neighbors++;
            }
            if (item[idx + 1]) {
              neighbors++;
            }
            if (grid[index - 1][idx - 1]) {
              neighbors++;
            }
            if (grid[index - 1][idx]) {
              neighbors++;
            }
            if (grid[index - 1][idx + 1]) {
              neighbors++;
            }
            if (grid[index + 1][idx - 1]) {
              neighbors++;
            }
            if (grid[index + 1][idx]) {
              neighbors++;
            }
            if (grid[index + 1][idx + 1]) {
              neighbors++;
            }
          }
        }
        if (sub === true) {
          console.log(sub);
          console.log(neighbors);
          if (neighbors < 4 && neighbors > 1) {
            newSub.push(true);
            console.log("condition met");
          } else {
            newSub.push(false);
          }
        } else {
          if (neighbors === 3) {
            newSub.push(true);
            console.log("other condition");
          } else {
            newSub.push(false);
          }
        }
      });
      newGrid.push(newSub);
    });
    setGrid(newGrid);
  };

  return (
    <>
      <GridContainer>
        {grid.map((item, idx1) => {
          return item.map((cell, idx2) => {
            return (
              <Cells
                handleChange={handleChange}
                pos1={idx1}
                pos2={idx2}
                width={testArray.length / 100}
                height={testArray.length / 100}
                value={cell}
                row={idx1}
                col={idx2}
              ></Cells>
            );
          });
        })}
      </GridContainer>
      <button onClick={algorithm}> Test Logic </button>
    </>
  );
}
export default Grid;
