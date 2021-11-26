import React, { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn Javascript", done: false },
    { id: 2, task: "Learn React", done: true },
    { id: 3, task: "Have a life!", done: false },
  ]);

  const [filter, setFilter] = useState();

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => t.done !== true));
  };

  return (
    <>
      <section className="todoapp">
        <Form addTodo={addTodo} />
        <List
          todos={todos}
          setTodos={setTodos}
          deleteTodo={deleteTodo}
          filter={filter}
        />
        <Filter
          todos={todos}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </section>
      <Footer />
    </>
  );
};

export default App;
