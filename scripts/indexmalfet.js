//todolistmalfeta
const ListToDo = [/*'estudiar TDD','practicar katas','estudiar Bases de dades'*/]
  

function addToDo() {
  let inputValue = document.getElementById("inputId").value;
  let newToDo = {
    id: Math.floor(Math.random() * 100),
    task: inputValue,
  };
  ListToDo.push(newToDo);
  console.log(ListToDo);
  render();
}

function removeToDo(id) {
  let index = ListToDo.findIndex((toDo) => toDo.id === id);

  ListToDo.splice(index, 1);
  console.log(ListToDo);
  render();
}


//RENDER

function render() {
  let html = `<input id=inputId type=text> <button id="addBut" onclick="addToDo()"> Add To Do </button>`

  for (const todo of ListToDo) {
    html += ` <div class=toDo> <li class="liClass"> ${todo.task}</li>
    <div class=butContainer><button id="edit" onclick="editToDo(${todo.id}), createInput(${todo.id})">Edit</button><button id="deleteBut"onclick="removeToDo(${todo.id})" >Delete</button></div> </div>`;
  }
    let DOMList = document.getElementById("App");
    DOMList.innerHTML = html;
}

//MAIN
render();



