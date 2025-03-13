import './App.css'
import NewAddTask from './Component/NewAddTask';
import ToDoList from './Component/ToDoList';
import { useState } from 'react';
import { getAll } from './Component/ToDoService';

function App() {
  const [list, setList] = useState(getAll());

  return (
    <>
    <button>Add New</button>
    <ToDoList 
    list={list}/>
    < NewAddTask/>
    </>
  )
}

export default App
