import filterReducer from "./FilterTodos/FilterReducer";
import todoReducer from "./Todos/TodoReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
