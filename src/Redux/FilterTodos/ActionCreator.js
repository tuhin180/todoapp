import { COLORCHANGE, STATUSCHANGE } from "./ActionType";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGE,
    payload: status,
  };
};

export const colorchange = (color, changeType) => {
  return {
    type: COLORCHANGE,
    payload: {
      color,
      changeType,
    },
  };
};
