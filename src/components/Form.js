import React from "react";

const Form = ({
  uncompletedList,
  setUncompletedList,
  setInputText,
  inputText,
  setSelected,
}) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUncompletedList([
      ...uncompletedList,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const changeState = (e) => {
    setSelected(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      ></input>
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select" onChange={changeState}>
        <select name="todos" className="filter-todo">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
