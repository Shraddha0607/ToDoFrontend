import { IToDoItem } from "./ToDoItem.model";

let todoItems: IToDoItem[] = 
[
    { listid:1, title: "title1", description: "description1" },
    { listid:2, title: "title2", description: "description2" },
    {listid:3, title: "title3", description: "description3" },
    { listid:4, title: "title4", description: "description4" },
    { listid:5, title: "title5", description: "description5" },
]

export function getAll(): IToDoItem[] {
    return todoItems;
}

export function add(item : IToDoItem){
    todoItems.push(item);
    console.log(todoItems);
    
}

export function deleteItem(id: number) {
    todoItems = todoItems.filter(listItem => listItem.listid !== id);
    
    console.log("After deletion:", todoItems);  
    return todoItems;
}

// remove
// findById
// mark task complete
// update task


