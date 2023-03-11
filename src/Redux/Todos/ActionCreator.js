import {
  ADDTODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECT,
  DELETED,
  TOGGLETODOS,
} from "./ActionType";

export const addedTodo = (todoText) => {
  return {
    type: ADDTODO,
    payload: todoText,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLETODOS,
    payload: todoId,
  };
};

export const colortSelected = (color, todoId) => {
  return {
    type: COLORSELECT,
    payload: {
      color,
      todoId,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
