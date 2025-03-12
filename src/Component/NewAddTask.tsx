import React from 'react'
import { add, deleteItem } from './ToDoService';
import {useState} from 'react'
import { IToDoItem } from "./ToDoItem.model";

const NewAddTask = () =>{
    const [title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    // event handle to update state variable
    const handleTitleChanger = (event) => {
        // console.log(event.target.value);

        setTitle(event.target.value);
    };

    const handleDescriptionChanger = (event) => {
        // console.log(event.target.value);
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log(title );
        add(item: IToDoItem(title, description));
    };

    
  return (
    <div className='taskContainer'>
      <input type="text" placeholder='add title' value={title} onChange={handleTitleChanger}></input> 
      <input type="text" placeholder='add description' onChange={handleDescriptionChanger} value={description}></input> 
      
      <button onClick={handleSubmit}>Save task</button>
    </div>
  )
}

export default NewAddTask
