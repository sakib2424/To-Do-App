import React from "react";

const Todo = ({ text, completed, id, delteTodo }) => {
  const childDelete = () => {
    delteTodo(id);
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={childDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;