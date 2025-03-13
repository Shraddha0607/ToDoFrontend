import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
import { deleteItem, getAll } from './ToDoService'
import { IToDoItem } from './ToDoItem.model';


const ToDoList = ({list} :{list : IToDoItem[]}) => {
    
    const[updatedList, setUpdatedList] = useState(list);

    function OnClickHandle(id:number){
        deleteItem(id);
        setUpdatedList( getAll());
    }

    return (
        <div>
            {updatedList.map( (item: IToDoItem) => {
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
