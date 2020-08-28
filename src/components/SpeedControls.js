import React from "react";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import { FASTER, SLOWER } from "../store/gridActions";
import "../styles/controls.scss";

function SpeedControls() {
  const [state, dispatch] = useStateValue(gridContext);
  const { speed } = state;
  return (
    <div className="speed-container">
      <div
        onClick={() => speed < 1000 && dispatch({ type: SLOWER })}
        className="arrows"
      >
        {" "}
        {"<"}{" "}
      </div>
      <span className="speed-label">Speed</span>
      <div
        onClick={() => speed > 0 && dispatch({ type: FASTER })}
        className="arrows"
      >
        {" "}
        {">"}{" "}
      </div>
    </div>
  );
}
export default SpeedControls;
