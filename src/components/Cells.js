import React from "react";
import { Cell } from "../styles/mainStyles";

function Cells(props) {
  const { row, col, width, height, pos1, pos2, handleChange, value } = props;
  return (
    <div
      className="cells"
      onClick={() => handleChange(pos1, pos2)}
      style={{
        backgroundColor: value ? "yellow" : "black",
        gridColumn: col + 1,
        gridRow: row + 1,
      }}
      // background={value && "yellow"}
      // height={`${height * 100}px`}
      // width={`${width * 100}px`}
      // row={row + 1}
      // col={col + 1}
    ></div>
  );
}
export default Cells;
