import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [uncompletedList, setUncompletedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    console.log(uncompletedList);
    console.log(completedList);
  }, [uncompletedList]);

  return (
    <div className="App">
      <header>
        <h1>Sakib's to-do list</h1>
      </header>
      <Form
        todos={uncompletedList}
        setTodos={setUncompletedList}
        setInputText={setInputText}
        inputText={inputText}
      ></Form>
      <TodoList
        todos={uncompletedList}
        setTodos={setUncompletedList}
        completedList={completedList}
        setCompletedList={setCompletedList}
      ></TodoList>
    </div>
  );
}

export default App;
