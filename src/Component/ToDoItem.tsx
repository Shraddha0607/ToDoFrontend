import React, { useState } from 'react'
import './ToDoItem.css'
import { IToDoItem } from './ToDoItem.model';
import { getRecord } from './ToDoService';

interface Props {
  todoItem: IToDoItem
  onDeleteHandler: any
  onUpdateHandler: any
}

const ToDoItem = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const[id, setId] = useState(0);
  const [title, setTitle] = useState("fgh");
  const [description, setDescription] = useState("th");

  const togglePopup = (id : number) => {
    console.log("popup function called");
    // need to fetch actal data
    const existingRecord = getRecord(id);
    setId(id);
    setTitle(existingRecord[0].title);
    setDescription(existingRecord[0].description);
    setIsOpen(!isOpen);
  };

  function onUpdateClick(id : number){
    const updatedItem = {listId : id, title : title, description : description};
    props.onUpdateHandler(id, updatedItem);

  }


  return (
    <div className="to-do-item">
      <h1>{props.todoItem.title}</h1>
      <p>{props.todoItem.description}</p>
      <button onClick={() => props.onDeleteHandler(props.todoItem.listid)}>Delete</button>
      {/* <button onClick={() => props.onUpdateHandler(props.todoItem.listid)}> Update</button> */}
      <button onClick={() => togglePopup(props.todoItem.listid)}> Update</button>
      {isOpen && (
        <div className="popup">
          <button onClick={() => togglePopup(id)}>Close</button>
          <p>Update task</p>
          <div className='popUpTaskContainer'>
            <input type="text" placeholder='add title' value={title} name="title" onChange={(event) => { setTitle(event.target.value) }}></input>

            <input type="text" placeholder='add description' name="description" value={description} onChange={(event) => { setDescription(event.target.value) }} ></input>

            <button onClick={()=> onUpdateClick(props.todoItem.listid)}>Update task</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ToDoItem;

