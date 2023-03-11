import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorchange, statusChanged } from "../Redux/FilterTodos/ActionCreator";

const numberOfTodo = (numberOfTodos) => {
  switch (numberOfTodos) {
    case 0:
      return "No task left";

    case 1:
      return "1 task left";

    default:
      return `${numberOfTodos} tasks left`;
  }
};

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  const { status, colors } = filters;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };
  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorchange(color, "remove"));
    } else {
      dispatch(colorchange(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodo(remainingTodos)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange("All")}
          className={`cursor-pointer  ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Incomplete")}
          className={`cursor-pointer  ${
            status === "Incomplete" && "font-bold"
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer  ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
