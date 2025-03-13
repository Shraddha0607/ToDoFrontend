import React from 'react'
import { add, deleteItem } from './ToDoService';
import {useState} from 'react'
import { IToDoItem } from "./ToDoItem.model";
import { getAll } from './ToDoService'

const NewAddTask = ({list} : {list: IToDoItem[]}) =>{
    const [title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[updatedList, setUpdatedList] = useState(getAll);

    

    const handleSubmit = (event) => {
        // need to get previous id
        let lastIndex = getAll().length;
        let listid = lastIndex+1;
        const newItem: IToDoItem = { listid, title, description };
        add(newItem);
        console.log(newItem+"hhhll");
        
        setUpdatedList(getAll);
        list= updatedList;
    };

    
  return (
    <div className='taskContainer'>
      <input type="text" placeholder='add title' value={title} name="title" onChange={ (event) => {setTitle(event.target.value)}}></input> 

      <input type="text" placeholder='add description' name="description" value={description} onChange={ (event) => {setDescription(event.target.value)}} ></input> 
      
      <button onClick={handleSubmit}>Save task</button>
    </div>
  )
}

export default NewAddTask
