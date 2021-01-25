import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  // Lists
  const [uncompletedList, setUncompletedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const [selected, setSelected] = useState("All");
  const [displayList, setDisplayList] = useState(uncompletedList);

  const updateDisplay = () => {
    if (selected === "All") {
      setDisplayList(uncompletedList.concat(completedList));
    } else if (selected === "Completed") {
      setDisplayList(completedList);
    } else {
      setDisplayList(uncompletedList);
    }
  };

  useEffect(() => {
    updateDisplay();
  }, [completedList, uncompletedList, selected]);

  return (
    <div className="App">
      <header>
        <h1>Sakib's to-do list</h1>
      </header>
      <Form
        uncompletedList={uncompletedList}
        setUncompletedList={setUncompletedList}
        setInputText={setInputText}
        inputText={inputText}
        setSelected={setSelected}
      ></Form>
      <TodoList
        uncompletedList={uncompletedList}
        completedList={completedList}
        setUncompletedList={setUncompletedList}
        setCompletedList={setCompletedList}
        displayList={displayList}
      ></TodoList>
    </div>
  );
}

export default App;
