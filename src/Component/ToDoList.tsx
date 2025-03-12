import React from 'react'
import ToDoItem from './ToDoItem'
import { deleteItem, getAll } from './ToDoService'
import { IToDoItem } from './ToDoItem.model';

let list = getAll();

function listItemPrepare(item: IToDoItem) {

    const OnClickHandle =()=>{
       console.log(item.listid);
        deleteItem(item.listid);
    }
    return (
        <div>
            <ToDoItem
                todoItem={item}
            />
            <button onClick={OnClickHandle}>Delete</button>
        </div>
    )
}

const ToDoList = () => {
    return (
        <div>
            {list.map(listItemPrepare)}
        </div>
    )
}

export default ToDoList
