export const algo2 = (grid, dispatch) => {
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    const newSub = [];
    for (let j = 0; j < grid[i].length; j++) {
      let sub = grid[i];
      let neighbors = 0;
      //upper array logic
      if (i === 0) {
        if (j === 0) {
          neighbors = grid[i][j + 1] + grid[i + 1][j] + grid[i + 1][j + 1];
        } else if (j === sub.length - 1) {
          neighbors = grid[i][j - 1] + grid[i + 1][j] + grid[i + 1][j - 1];
        } else {
          neighbors =
            grid[i][j - 1] +
            grid[i][j + 1] +
            grid[i + 1][j + 1] +
            grid[i + 1][j] +
            grid[i + 1][j - 1];
        }
      }
      //lower array logic
      else if (i === grid.length - 1) {
        if (j === 0) {
          neighbors = grid[i][j + 1] + grid[i - 1][j] + grid[i - 1][j + 1];
        } else if (j === sub.length - 1) {
          neighbors = grid[i][j - 1] + grid[i - 1][j] + grid[i - 1][j - 1];
        } else {
          neighbors =
            grid[i][j - 1] +
            grid[i][j + 1] +
            grid[i - 1][j + 1] +
            grid[i - 1][j] +
            grid[i - 1][j - 1];
        }
      } else {
        if (j === 0) {
          neighbors =
            grid[i][j + 1] +
            grid[i - 1][j] +
            grid[i - 1][j + 1] +
            grid[i - 1][j] +
            grid[i - 1][j + 1];
        } else if (j === sub.length - 1) {
          neighbors = grid[i][j - 1] + grid[i - 1][j] + grid[i - 1][j - 1];
        } else {
          neighbors =
            grid[i][j - 1] +
            grid[i][j + 1] +
            grid[i - 1][j + 1] +
            grid[i - 1][j] +
            grid[i - 1][j - 1] +
            grid[i + 1][j + 1] +
            grid[i + 1][j] +
            grid[i + 1][j - 1];
        }
      }
      if (sub[j] === 0 && neighbors === 3) {
        newSub.push(1);
      } else if (sub[j] === 1 && neighbors > 1 && neighbors < 4) {
        newSub.push(1);
      } else {
        newSub.push(0);
      }
    }
    newGrid.push(newSub);
  }
  dispatch({ type: "PLAY", payload: newGrid });
};
