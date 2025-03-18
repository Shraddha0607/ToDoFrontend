import { IToDoItem } from "../Models/ToDoItem.model";

let todoItems: IToDoItem[] =
    [
        { id: 1, title: "title 1", description: "description 1" },
        { id: 2, title: "title 2", description: "description 2" },
        { id: 3, title: "title 3", description: "description 3" },
        { id: 4, title: "title 4", description: "description 4" },
        { id: 5, title: "title 5", description: "description 5" },
    ]

export function getAll(): IToDoItem[] {
    return [...todoItems];
}

export function add(item: IToDoItem): void {
    let max = (todoItems.length != 0) ? todoItems.map(x => x.id).reduce((a, b) => Math.max(a, b)) : 0;
    item.id = max + 1;
    todoItems.push(item);
}

export function deleteItem(id: number): void {
    todoItems = todoItems.filter(item => item.id !== id);
}

export function getRecord(id: number) {
    const item = todoItems.find(item => item.id === id);
    return item;
}

export function updateItem(item: IToDoItem) {
    todoItems = todoItems.map(x => x.id === item.id ? item : x);
}