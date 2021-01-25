import React from "react";

const Todo = ({ text, completed, id, delteTodo, handleComplete }) => {
  const childDelete = () => {
    delteTodo(id);
  };
  const completeHelper = () => {
    handleComplete(id);
  };
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHelper} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={childDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
