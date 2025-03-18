import './App.css'
import TaskAddEditForm from './Component/TaskAddEditForm';
import ToDoList from './Component/ToDoList';
import { useState } from 'react';
import { getAll, deleteItem, add, updateItem } from './Services/ToDoService';
import { IToDoItem } from './Models/ToDoItem.model';
import PopupWrapper from './UI/Popup/PopupWrapper';

function App() {
  const [list, setList] = useState(getAll());
  const [item, setItem] = useState<IToDoItem>();
  const [requestType, setRequestType] = useState<'EDIT' | 'ADD' | undefined>(undefined);

  function onUpdateClickHandler(item: IToDoItem) {
    setItem(item);
    setRequestType('EDIT');
  }

  function onAddHandler(newTask: IToDoItem) {
    add(newTask);
    setList(getAll());
    setItem(undefined);
    setRequestType(undefined);
  };

  function onDeleteHandler(id: number) {
    deleteItem(id);
    setList(getAll());
  }

  function onUpdateHandler(updatedItem: IToDoItem) {
    updateItem(updatedItem);
    setList(getAll());
    setItem(undefined);
    setRequestType(undefined);
  }

  return (
    <>{
      requestType &&
      <PopupWrapper visible={requestType !== undefined} onClickHandler={(e) => { if (e.target === e.currentTarget) { setRequestType(undefined); } }}>
        <TaskAddEditForm onSubmitHandler={requestType === 'ADD' ? onAddHandler : onUpdateHandler} item={item} />
      </PopupWrapper>
    }

      <button onClick={() => { setRequestType('ADD') }}>Add New</button>
      <ToDoList
        items={list}
        onDeleteClickHandler={onDeleteHandler}
        onUpdateClickHandler={onUpdateClickHandler}
      />
    </>
  )
}

export default App
