import React, { useState } from "react";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import {
  largeBoard,
  extraLargeBoard,
  RESET_GAME,
  random,
} from "../store/gridActions";
import "../styles/controls.scss";
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
    <div className="controls">
      <div className="button-container">
        <button onClick={() => setTimer(true)}>Start</button>
        <button onClick={() => setTimer(false)}>Stop</button>
        <button
          onClick={() => {
            setForm("normal");
            dispatch({ type: RESET_GAME });
          }}
        >
          Reset
        </button>
        <button onClick={() => random(dispatch, state.grid)}>Randomize</button>
      </div>
      <form>
        <label htmlFor="size">
          Select a Size:{"  "}
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
