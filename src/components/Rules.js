import React from "react";

function Rules() {
  return (
    <div>
      <p>
        If a cell is "alive" and has 2-3 neighbors it remains alive. Else it
        dies
      </p>
      <p>
        If a cell is "dead" and has exactly 3 neighbors, then it comes to life.
        Else it dies.
      </p>
    </div>
  );
}

export default Rules;
