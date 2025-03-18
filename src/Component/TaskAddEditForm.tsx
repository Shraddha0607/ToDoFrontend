import { useState } from 'react'
import { IToDoItem } from "../Models/ToDoItem.model";
import './TaskAddEditForm.css'
import Card from '../UI/Popup/Card/Card';

interface Props {
    onSubmitHandler: (item: IToDoItem) => void;
    item?: IToDoItem
}

function TaskAddEditForm(props: Props) {
    const [title, setTitle] = useState(props.item?.title ?? '');
    const [description, setDescription] = useState(props.item?.description ?? '');

    function onSaveClick() {
        const item: IToDoItem = { id: 0, title: title, description: description };
        if (props.item)
            item.id = props.item.id;
        props.onSubmitHandler(item);
    }

    return (
        <Card>
            <input type="text" placeholder='add title' value={title} name="title" onChange={(event) => { setTitle(event.target.value); }} /> <br />
            <input type="text" placeholder='add description' name="description" value={description} onChange={(event) => { setDescription(event.target.value); }} /> <br />
            <button onClick={onSaveClick}>Save task</button>
        </Card>

    )
}

export default TaskAddEditForm
