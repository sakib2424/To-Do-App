import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  //   Delete to-do
  const delteTodo = (idToDelete) => {
    setTodos(todos.filter((item) => item.id !== idToDelete));
  };

  const renderedList = todos.map((item) => (
    <Todo
      text={item.text}
      completed={item.completed}
      id={item.id}
      delteTodo={delteTodo}
      key={Math.random() * 1000}
    ></Todo>
  ));

  return (
    <div className="todo-container">
      <ul className="todo-list">{renderedList}</ul>
    </div>
  );
};

export default TodoList;
