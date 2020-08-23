import React from "react";
import { useStateValue } from "react-conflux";
import { gridContext } from "../store/contexts";
import { addPreset } from "../store/gridActions";
import { scrubberArray, roteightor, r2d2, pulsar } from "../utils/presetArrays";
import "../styles/presets.scss";

function Presets() {
  const [state, dispatch] = useStateValue(gridContext);
  return (
    <div className="preset-container">
      <h3 className="preset-heading">Preset Patterns</h3>
      <div className="presets">
        <h4>Scrubber</h4>
        <div className="preset-grid">
          {scrubberArray.map((item, idx1) => {
            return item.map((sub, idx2) => {
              return (
                <div
                  key={idx1 + idx2}
                  className="preset-cells"
                  style={{
                    backgroundColor: sub ? "yellow" : "black",
                    gridColumn: idx2 + 1,
                    gridRow: idx1 + 1,
                  }}
                ></div>
              );
            });
          })}
        </div>
        <button onClick={() => addPreset(dispatch, state.grid, scrubberArray)}>
          select
        </button>
      </div>
      <div className="presets">
        <h4>Roteightor</h4>
        <div className="preset-grid">
          {roteightor.map((item, idx1) => {
            return item.map((sub, idx2) => {
              return (
                <div
                  className="preset-cells"
                  key={idx1 + idx2}
                  style={{
                    backgroundColor: sub ? "yellow" : "black",
                    gridColumn: idx2 + 1,
                    gridRow: idx1 + 1,
                  }}
                ></div>
              );
            });
          })}
        </div>
        <button onClick={() => addPreset(dispatch, state.grid, roteightor)}>
          select
        </button>
      </div>
      <div className="presets">
        <h4>R2D2</h4>
        <div className="preset-grid">
          {r2d2.map((item, idx1) => {
            return item.map((sub, idx2) => {
              return (
                <div
                  className="preset-cells"
                  key={idx1 + idx2}
                  style={{
                    backgroundColor: sub ? "yellow" : "black",
                    gridColumn: idx2 + 1,
                    gridRow: idx1 + 1,
                  }}
                ></div>
              );
            });
          })}
        </div>
        <button onClick={() => addPreset(dispatch, state.grid, r2d2)}>
          select
        </button>
      </div>
      <div className="presets">
        <h4>Pulsar</h4>
        <div className="preset-grid">
          {pulsar.map((item, idx1) => {
            return item.map((sub, idx2) => {
              return (
                <div
                  className="preset-cells"
                  key={idx1 + idx2}
                  style={{
                    backgroundColor: sub ? "yellow" : "black",
                    gridColumn: idx2 + 1,
                    gridRow: idx1 + 1,
                  }}
                ></div>
              );
            });
          })}
        </div>
        <button onClick={() => addPreset(dispatch, state.grid, pulsar)}>
          select
        </button>
      </div>
    </div>
  );
}

export default Presets;
