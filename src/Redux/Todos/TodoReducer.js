import {
  ADDTODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECT,
  DELETED,
  TOGGLETODOS,
} from "./ActionType";
import { initialState } from "./initialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO: {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }

    case TOGGLETODOS: {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    case COLORSELECT: {
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    }

    case DELETED: {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case ALLCOMPLETED: {
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    }

    case CLEARCOMPLETED: {
      return state.filter((todo) => !todo.completed);
    }

    default:
      return state;
  }
};

export default todoReducer;
