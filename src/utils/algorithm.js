export const algorithm = (grid, dispatch) => {
  let newGrid = [];
  grid.forEach((item, index) => {
    const newSub = [];
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
        if (neighbors < 4 && neighbors > 1) {
          newSub.push(true);
        } else {
          newSub.push(false);
        }
      } else {
        if (neighbors === 3) {
          newSub.push(true);
        } else {
          newSub.push(false);
        }
      }
    });
    newGrid.push(newSub);
  });
  dispatch({ type: "PLAY", payload: newGrid });
};
