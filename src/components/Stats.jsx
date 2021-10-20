import React from 'react'
import { useSelector } from "react-redux";
import './Stats.css' 
const Stats = () => {
   const todosCompleted = useSelector((state) => state.todo).filter(todo => todo.completed).length;
   const todoTotal = useSelector((state) => state.todo).length;
   return (
      <div className = 'stats-container'>
         <div className= 'stats-total'>{todosCompleted} out of {todoTotal} Completed</div>
         <div className= 'stats-percent'>{(todosCompleted / todoTotal)* 100}% Completed</div>
      </div>
   )
};
export default Stats
