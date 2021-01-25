import React from "react";
import Todo from "./Todo";

const TodoList = ({
  uncompletedList,
  setUncompletedList,
  completedList,
  setCompletedList,
  displayList,
}) => {
  //   Delete to-do
  const delteTodo = (idToDelete) => {
    setUncompletedList(
      uncompletedList.filter((item) => item.id !== idToDelete)
    );
  };

  // Mark as completed
  const handleComplete = (idOfCompleted) => {
    let found = undefined;
    // Find the item to change
    uncompletedList.forEach((item) => {
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
  const renderedList = displayList.map((item) => (
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
