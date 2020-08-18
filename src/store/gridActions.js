export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const PLAY_GAME = "PLAY_GAME";
export const RESET_GAME = "RESET_GAME";
export const LARGE_BOARD = "LARGE_BOARD";
export const EXTRA_LARGE_BOARD = "EXTRA_LARGE_BOARD";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const largeBoard = (dispatch) => {
  dispatch({ type: LOADING });
  const createArray = async () => {
    return await Promise.resolve(new Array(30).fill(new Array(30).fill(false)));
  };
  createArray().then((res) => dispatch({ type: LARGE_BOARD, payload: res }));
};

export const extraLargeBoard = (dispatch) => {
  console.log("fired");
  dispatch({ type: LOADING });
  const createArray = async () => {
    return await Promise.resolve(new Array(40).fill(new Array(40).fill(false)));
  };
  createArray().then((res) =>
    dispatch({ type: EXTRA_LARGE_BOARD, payload: res })
  );
};
