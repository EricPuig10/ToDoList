import { todoList } from "./todoList.js";



document.getElementById("addButton").addEventListener("click", () => {
    if (todoInput.value != ""){
        let newToDo = {
            id: Math.floor(Math.random() * 100),
            task: todoInput.value,
        };
        todoList.addTodo(newToDo)
        todoInput.value = "";
        console.log (todoList.state)
    }
});

todoList.render()