import React from 'react'
import './ToDoItem.css'
import { IToDoItem } from './ToDoItem.model';

interface Props {
    todoItem : IToDoItem
}

const ToDoItem = ( props : Props) => {
  return (
    <div className="to-do-item">
      <h1>{props.todoItem.title}</h1>
      <p>{props.todoItem.description}</p>
    </div>
  )
}

export default ToDoItem;

