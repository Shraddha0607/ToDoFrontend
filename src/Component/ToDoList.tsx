import React from 'react'
import ToDoItem from './ToDoItem'
import { getAll } from './ToDoService'
import { IToDoItem } from './ToDoItem.model';

let list = getAll();

function listItemPrepare(item: IToDoItem) {
    return <ToDoItem
        todoItem = {item}
    />
}

const ToDoList = () => {
    return (
        <div>
            {list.map(listItemPrepare)}
        </div>
    )
}

export default ToDoList
