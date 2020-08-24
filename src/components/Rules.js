import React from "react";
import "../styles/rules.scss";

function Rules() {
  return (
    <div className="rules-container">
      <h4>Rules of the Game:</h4>
      <ol>
        <li>
          If a cell is "alive" and has 2-3 neighbors it remains alive. Else it
          dies
        </li>
        <li>
          If a cell is "dead" and has exactly 3 neighbors, then it comes to
          life. Else it dies.
        </li>
      </ol>
    </div>
  );
}

export default Rules;
