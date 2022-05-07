export const todoList ={
    state:[
      {
        id: 1,
        task: "Estudiar",
      },
      {
        id: 2,
        task: "Practicar katas",
      },
      {
        id: 3,
        task:  "Estudiar bases de dades relacionades",
      },
    ],

    addTodo(newTodo){
        this.state.push(newTodo);
        this.render();
    },
  
    deleteByIndex(index){
      this.state.splice(index,1);
      console.log (todoList.state)
      this.render()
    },
    //identificar el boto que apreto i crear un input a la llista corresponent per poder editar text. 
    //agafar el valor del input i cambiarlo a l'hora de fer el push del newtodo


    selectListToEdit(){
    let oldList = document.querySelectorAll("li")
    oldList.innerHTML = document.createElement(`input`)
    todoList.render();
    },
  
    render(){
      let html= '';
  
      for (const todo of this.state){
        html += `<div class=liDiv> 
                    <div class=content><li> ${todo.task} </li></div>
                    <div class=butDiv>
                    <button id=${this.state.indexOf(todo)} class="deleteButton">-</button> 
                    <button id=${this.state.indexOf(todo)} class="editButton">Edit</button> 
                    </div>
                  </div>`;
                
      }
      
  
      let DOMlist = document.getElementById("App");
      DOMlist.innerHTML = html;

      let buttons = document.querySelectorAll(".deleteButton");
      buttons.forEach((button) => {
        button.addEventListener("click", (e) => this.deleteByIndex(e.target.id) )
      });

      let buttonsEdit = document.querySelectorAll(".editButton");
      buttonsEdit.forEach((button) => {
        button.addEventListener("click", (e) => this.selectListToEdit(e.target.id) )
      });
    },
  };
  
  todoList.render();