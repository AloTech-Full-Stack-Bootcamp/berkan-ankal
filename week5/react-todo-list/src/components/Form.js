import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      return false;
    }

    const newTodo = { id: uuidv4(), task, done: false };
    addTodo(newTodo);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChange}
          value={task}
        />
      </form>
    </header>
  );
};

export default Form;
