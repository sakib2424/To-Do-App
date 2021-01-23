import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [fullList, setFullList] = useState([]);

  useEffect(() => {
    console.log(fullList);
  }, [fullList]);

  return (
    <div className="App">
      <header>
        <h1>Sakib's to-do list</h1>
      </header>
      <Form
        todos={fullList}
        setTodos={setFullList}
        setInputText={setInputText}
        inputText={inputText}
      ></Form>
      <TodoList todos={fullList}></TodoList>
    </div>
  );
}

export default App;
