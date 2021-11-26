import React from "react";

const List = ({ todos, setTodos, deleteTodo, filter }) => {
  const handleCheck = (todo) => {
    let newTodo = { id: todo.id, task: todo.task, done: !todo.done };
    setTodos(todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)));
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos
          .filter((todo) =>
            filter !== undefined ? todo.done === filter : todo
          )
          .map((todo, i) => (
            <li className={todo.done ? "completed" : ""} key={i}>
              <div className="view">
                <input
                  className="toggle"
                  checked={todo.done}
                  type="checkbox"
                  readOnly
                  onClick={() => handleCheck(todo)}
                />
                <label>{todo.task}</label>
                <button
                  className="destroy"
                  onClick={() => deleteTodo(todo)}
                ></button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default List;
