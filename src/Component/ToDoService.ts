import { IToDoItem } from "./ToDoItem.model";

let todoItems: IToDoItem[] =
    [
        { listid: 1, title: "title1", description: "description1" },
        { listid: 2, title: "title2", description: "description2" },
        { listid: 3, title: "title3", description: "description3" },
        { listid: 4, title: "title4", description: "description4" },
        { listid: 5, title: "title5", description: "description5" },
    ]

export function getAll(): IToDoItem[] {
    return [...todoItems];
}

export function add(item: IToDoItem) {
    let max = (todoItems.length != 0) ? todoItems.map(x => x.listid).reduce((a, b) => Math.max(a, b)) : 0;
    item.listid = max == null ? 1 : max + 1;
    todoItems.push(item);
}

export function deleteItem(id: number) {
    todoItems = todoItems.filter(listItem => listItem.listid !== id);
    return todoItems;
}

export function getRecord(id: number){
    todoItems = todoItems.filter(listItem => listItem.listid === id);
    return todoItems;
}

export function updateItem(id: number, item: IToDoItem) {
    let existingItem = todoItems.filter(x => x.listid == id);
    existingItem.map(x => {
        if (x.listid === id) {
            x.title = item.title
            x.description = item.description
        }
        else {
            return x;
        }
    }
    );
}

// remove
// findById
// mark task complete
// update task


