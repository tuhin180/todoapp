import { COLORCHANGE, STATUSCHANGE } from "./ActionType";
import { initialState } from "./InitialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGE: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case COLORCHANGE: {
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }
    }
    default:
      return state;
  }
};
export default filterReducer;
