import React, { useState } from "react";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import { largeBoard, extraLargeBoard, RESET_GAME } from "../store/gridActions";

function Controls({ setTimer }) {
  const [state, dispatch] = useStateValue(gridContext);
  const [form, setForm] = useState("normal");
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(e.target.value);
    if (e.target.value === "large") {
      largeBoard(dispatch);
    }
    if (e.target.value === "extraLarge") {
      extraLargeBoard(dispatch);
    }
    if (e.target.value === "normal") {
      dispatch({ type: RESET_GAME });
    }
  };

  return (
    <div>
      <button onClick={() => setTimer(true)}>Start</button>
      <button onClick={() => setTimer(false)}>Stop</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="size">
          Select a Size:
          <select value={form} onChange={(e) => handleSubmit(e)}>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extraLarge">Extra Large</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Controls;
