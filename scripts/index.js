import { todoList } from "./todoList.js";

document.addEventListener('DOMContentLoaded', keyPress("Enter"))

function keyPress (tecla){ 
    let todoInput = document.getElementById('todoInput');
    todoInput.addEventListener("keypress", function(keyAction) {
        if (keyAction.key === tecla) {

          document.getElementById("addButton").click();
        }
    }
)};

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