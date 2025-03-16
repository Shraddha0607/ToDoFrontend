import ToDoItem from './ToDoItem'
import { IToDoItem } from './ToDoItem.model';

interface Props {
    items: IToDoItem[],
    onDeleteHandler: any
    onUpdateHandler: any
}

const ToDoList = (props: Props) =>
    props.items.map((item: IToDoItem) =>
        <ToDoItem
            todoItem={item}
            onDeleteHandler={props.onDeleteHandler}
            key={item.listid}
            onUpdateHandler={props.onUpdateHandler}
        />
    )

export default ToDoList
