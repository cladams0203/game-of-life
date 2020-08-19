import React from "react";
import { Cell } from "../styles/mainStyles";

function Cells(props) {
  const { row, col, width, height, pos1, pos2, handleChange, value } = props;
  return (
    <Cell
      onClick={() => handleChange(pos1, pos2)}
      background={value && "yellow"}
      height={`${height * 100}px`}
      width={`${width * 100}px`}
      row={row + 1}
      col={col + 1}
    ></Cell>
  );
}
export default Cells;
