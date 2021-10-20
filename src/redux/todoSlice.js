import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const todoSlice = createSlice({
  name: "reux-todo",
  initialState: [
    { id: 1323, title: "Task 1", completed: false },
    { id: 2322, title: "Task 2", completed: false },
    { id: 3323, title: "Task 3", completed: false },
    { id: 4232, title: "Task 45", completed: false },
  ],
  reducers: {
    toggleChange: (state, action) => {
      const toggleToDo = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      console.log(toggleToDo, action.payload.completed);
      state[toggleToDo].completed = action.payload.completed;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, toggleChange } = todoSlice.actions;

export default todoSlice.reducer;
