import React from 'react'
import { add, deleteItem } from './ToDoService';
import {useState} from 'react'
import { IToDoItem } from "./ToDoItem.model";

const NewAddTask = () =>{
    const [title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    

    const handleSubmit = (event) => {
        console.log(title );
        add(item: IToDoItem(title, description));
    };

    
  return (
    <div className='taskContainer'>
      <input type="text" placeholder='add title' value={title} onChange={ (event) => {setTitle(event.target.value)}}></input> 

      <input type="text" placeholder='add description' value={description} onChange={ (event) => {setDescription(event.target.value)}} ></input> 
      
      <button onClick={handleSubmit}>Save task</button>
    </div>
  )
}

export default NewAddTask
