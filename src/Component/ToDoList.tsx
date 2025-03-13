import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
import { deleteItem, getAll } from './ToDoService'
import { IToDoItem } from './ToDoItem.model';


const ToDoList = () => {
    const [list, setList] = useState(getAll());

    function OnClickHandle(id:number){
        deleteItem(id);
        setList( getAll());
    }

    return (
        <div>
            {list.map( (item: IToDoItem) => {
                return (
                    <div>
                        <ToDoItem
                            todoItem={item}
                        />
                        <button onClick={() => OnClickHandle(item.listid)}>Delete</button>
                        {/* list =  getAll(); */}
                    </div>
                )
            })}
        </div>
    )
}

export default ToDoList
