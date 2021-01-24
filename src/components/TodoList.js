import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, completedList, setCompletedList }) => {
  //   Delete to-do
  const delteTodo = (idToDelete) => {
    setTodos(todos.filter((item) => item.id !== idToDelete));
  };

  // Mark as completed
  const handleComplete = (idOfCompleted) => {
    let found = undefined;
    // Find the item to change
    todos.forEach((item) => {
      if (item.id === idOfCompleted) {
        found = item;
      }
    });
    // Change the completion status
    found.completed = true;
    // Add to completed list
    setCompletedList([...completedList, found]);
    // Remove it from todo list
    delteTodo(idOfCompleted);
  };

  //   Renders the list of to-dos
  const renderedList = todos.map((item) => (
    <Todo
      text={item.text}
      completed={item.completed}
      handleComplete={handleComplete}
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
