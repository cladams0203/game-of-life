import {
  LARGE_BOARD,
  LOADING,
  RESET_GAME,
  EXTRA_LARGE_BOARD,
  ADD_PRESET,
} from "./gridActions";

const initialState = {
  grid: new Array(25).fill(new Array(25).fill(0)),
  loading: false,
  error: "",
};

export const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        grid: state.grid.map((item, idx) => {
          return item.map((sub, index) => {
            if (idx === action.payload.pos1 && index === action.payload.pos2) {
              if (sub === 0) {
                return 1;
              } else {
                return 0;
              }
            } else {
              return sub;
            }
          });
        }),
      };
    case "PLAY":
      return {
        ...state,
        grid: action.payload,
      };
    case RESET_GAME:
      return initialState;
    case LARGE_BOARD:
      return {
        ...state,
        loading: false,
        grid: action.payload,
      };
    case EXTRA_LARGE_BOARD:
      return {
        ...state,
        loading: false,
        grid: new Array(40).fill(new Array(40).fill(false)),
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRESET:
      return {
        ...state,
        grid: action.payload,
      };
    default:
      return state;
  }
};
