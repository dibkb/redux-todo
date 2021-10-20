import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import './TaskList.css';
const TaskList = () => {
  const todos = useSelector((state) => state.todo);
  return (
    <div className = 'todos-container'>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo}></Todo>
      ))}
    </div>
  );
};

export default TaskList;
