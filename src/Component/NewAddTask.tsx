import { useState } from 'react'
import { IToDoItem } from "./ToDoItem.model";

interface Props {
    onAddHandler: any;
}

const NewAddTask = (props: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function onAddClick(event: any) {
        const newTask: IToDoItem = { listid: 0, title: title, description: description };
        props.onAddHandler(newTask);
    }

    return (
        <div className='taskContainer'>
            <input type="text" placeholder='add title' value={title} name="title" onChange={(event) => { setTitle(event.target.value) }}></input>

            <input type="text" placeholder='add description' name="description" value={description} onChange={(event) => { setDescription(event.target.value) }} ></input>

            <button onClick={onAddClick}>Save task</button>
        </div>
    )
}

export default NewAddTask
