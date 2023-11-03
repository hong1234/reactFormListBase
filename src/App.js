import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  
    const [ toDoList, setToDoList ] = useState(data);
  
    const addTask = (userInput) => {
      let copy = [...toDoList];
      copy = [...copy, { id: toDoList.length + 1, task: userInput }];
      setToDoList(copy);
    }
  
    const deleteTask = (id) => {
      const mapped = toDoList.filter((task) => task.id !== id);
      setToDoList(mapped);
    }
  
    return (
      <div className="App">
        <Header />
        <ToDoForm addTask={addTask}/><br/>
        <ToDoList toDoList={toDoList} deleteTask={deleteTask}/>
      </div>
    );
  
}

export default App;