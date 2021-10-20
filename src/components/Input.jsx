import React from "react";
import { useState } from "react";
import './Input.css';
const Input = () => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="type todo"
          onChange={(e) => setInput(e.target.value)}
          value = {input}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default Input;
