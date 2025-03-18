import './ToDoItem.css'
import { IToDoItem } from '../Models/ToDoItem.model';
import Card from '../UI/Card/Card';

interface Props {
  todoItem: IToDoItem
  onDeleteClickHandler: () => void
  onUpdateClickHandler: () => void
}

const ToDoItem = (props: Props) => {
  return (
    <Card>
      <h1>{props.todoItem.title}</h1>
      <p>{props.todoItem.description}</p>
      <button onClick={props.onDeleteClickHandler}>Delete</button>
      <button onClick={props.onUpdateClickHandler}> Update</button>
    </Card>
  )
}

export default ToDoItem;

