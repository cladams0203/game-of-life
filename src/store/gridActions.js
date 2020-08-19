export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const PLAY_GAME = "PLAY_GAME";
export const RESET_GAME = "RESET_GAME";
export const LARGE_BOARD = "LARGE_BOARD";
export const EXTRA_LARGE_BOARD = "EXTRA_LARGE_BOARD";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const ADD_PRESET = "ADD_PRESET";
export const RANDOM = "RANDOM";

export const largeBoard = (dispatch) => {
  dispatch({ type: LOADING });
  const createArray = async () => {
    return await Promise.resolve(new Array(30).fill(new Array(30).fill(0)));
  };
  createArray().then((res) => dispatch({ type: LARGE_BOARD, payload: res }));
};

export const extraLargeBoard = (dispatch) => {
  console.log("fired");
  dispatch({ type: LOADING });
  const createArray = async () => {
    return await Promise.resolve(new Array(40).fill(new Array(40).fill(0)));
  };
  createArray().then((res) =>
    dispatch({ type: EXTRA_LARGE_BOARD, payload: res })
  );
};

export const addPreset = (dispatch, grid, preset) => {
  dispatch({ type: LOADING });
  const splitPoint = Math.floor(grid.length / 2);
  const sub = grid.slice(0, splitPoint - 7);
  const sub2 = grid.slice(splitPoint + 8);
  const adder = Math.floor((grid.length - preset.length) / 2);
  const newPreset = preset.map((item) => {
    const front = new Array(adder).fill(0);
    const back = new Array(grid.length - adder - preset.length).fill(0);
    return front.concat(item, back);
  });
  dispatch({ type: ADD_PRESET, payload: sub.concat(newPreset, sub2) });
};

export const random = (dispatch, grid) => {
  dispatch({ type: LOADING });
  const newGrid = grid.map((item) => {
    return item.map((sub) => {
      return Math.round(Math.random());
    });
  });
  dispatch({ type: RANDOM, payload: newGrid });
};
