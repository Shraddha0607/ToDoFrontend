import ToDoItem from './ToDoItem'
import { IToDoItem } from '../Models/ToDoItem.model';

interface Props {
    items: IToDoItem[],
    onDeleteClickHandler: (id: number) => void
    onUpdateClickHandler: (item: IToDoItem) => void
}

const ToDoList = (props: Props) =>
    props.items.map((item: IToDoItem) =>
        <ToDoItem
            key={item.id}
            todoItem={item}
            onDeleteClickHandler={() => props.onDeleteClickHandler(item.id)}
            onUpdateClickHandler={() => props.onUpdateClickHandler(item)}
        />
    )

export default ToDoList
