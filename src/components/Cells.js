import React from "react";

function Cells(props) {
  const { row, col, pos1, pos2, handleChange, value } = props;
  return (
    <div
      className="cells"
      onClick={() => handleChange(pos1, pos2)}
      style={{
        backgroundColor: value ? "yellow" : "black",
        gridColumn: col + 1,
        gridRow: row + 1,
      }}
    ></div>
  );
}
export default Cells;
