import './App.css'
import NewAddTask from './Component/NewAddTask';
import ToDoList from './Component/ToDoList';
import { useState } from 'react';
import { getAll, deleteItem, add, updateItem } from './Component/ToDoService';
import { IToDoItem } from './Component/ToDoItem.model';
// import Popup from 'reactjs-popup';
import UpdatePopup from './Component/UpdatePopup';
import SimplePopup from './Component/UpdatePopup';

function App() {
  const [list, setList] = useState(getAll());
  const[isPopupOpen, setPopupOpen] = useState(false);

  function onAddHandler(newTask: IToDoItem) {
    add(newTask);
    console.log(list, "old state");
    console.log("new data", getAll());
    setList(getAll());
    console.log("new state ", list);

  };

  function onDeleteHandler(id: number) {
    deleteItem(id);
    setList(getAll());
  }

  function onUpdateHandler(id: number, updatedItem: IToDoItem) {
    
    // <UpdatePopup />
    console.log(id, "called");
    // const newTask: IToDoItem = { listid: 0, title: "title", description: "description" };

    const updated : IToDoItem = updatedItem;
    console.log("updated one" , updated);
    // { listid: 1, title: "title1", description: "description1" };
    updateItem(id, updated);
    setPopupOpen(true);
    console.log()
    // return <UpdatePopup/>
    return < SimplePopup/>
  }

  return (
    <>
      <button>Add New</button>
      < NewAddTask
        onAddHandler={onAddHandler}
      />
      <ToDoList
        items={list}
        onDeleteHandler={onDeleteHandler}
        onUpdateHandler={onUpdateHandler}
      />
      {/* if(isPopupOpen) && <UpdatePopup/> */}

    </>
  )
}

export default App
