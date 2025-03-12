import { IToDoItem } from "./ToDoItem.model";

let todoItems: IToDoItem[] = 
[
    { key:1, title: "title1", description: "description1" },
    { key:2, title: "title2", description: "description2" },
    { key:3, title: "title3", description: "description3" },
    { key:4, title: "title4", description: "description4" },
    { key:5, title: "title5", description: "description5" },
]

export function getAll(): IToDoItem[] {
    return todoItems;
}

// add
export function add(item : IToDoItem){
    console.log("add called");
    todoItems.push(item);
}

// export function deleteItem(item: IToDoItem){
//     todoItems.filter(listItem => listItem.key == item.key)

//     return todoItems;
// }


export function deleteItem(item: IToDoItem){
    todoItems.filter(listItem => listItem.key == item.key)

    return todoItems;
}
// remove
// findById
// mark task complete
// update task


