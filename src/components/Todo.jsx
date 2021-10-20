import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleChange } from "../redux/todoSlice";
import "./TaskList.css";
const Todo = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [taskStatus, setTaskStatus] = useState(completed);
  const changehandler = (e) =>{
   setTaskStatus(taskStatus => setTaskStatus(!taskStatus));
   console.log(title, taskStatus,e.target.value)
   dispatch(toggleChange({id : id,completed : taskStatus}))
  }
  return (
    <div
      className={`todo-container ${taskStatus ? "complete" : "not-complete"}`}
    >
      <h3 className="title">{title}</h3>
      <select
        className="select-field"
        value={taskStatus}
        onChange={changehandler}
      >
        <option value= {false}>Not Completed</option>
        <option value= {true}>Completed</option>
      </select>
    </div>
  );
};

export default Todo;
