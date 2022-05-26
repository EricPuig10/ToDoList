export const todoList ={
    state:[
      {
        id: 1,
        task: "Estudiar",
        state: "un-blocked",
        isDone: "",
      },
      {
        id: 2,
        task: "Practicar katas",
        state: "un-blocked",
      },
      {
        id: 3,
        task:  "Estudiar bases de dades relacionades",
        state: "un-blocked",
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


    editByIndex(index, parentContainer){
      console.log(index,parentContainer)

      parentContainer.innerHTML=(`<div class="edit_container">
      <button id=${index} class="edit_back_arrow"><i class="fa-solid fa-arrow-left"></i></button>
      <input id="edit_input" type="text" placeholder="No hi ha res per editar" 
      value=""/>
      <button id=${index} class="button_save"><i class="fa-solid fa-circle-check"></i></button>
      <button id=${index} class="button_close"><i class="fa-solid fa-xmark fa-lg"></i></button>
      </div>`);
      // fer el render un cop editat (save) o cancel·lat edició (close), no abans.
    },


    render(){
      let html= '';
  
      for (const todo of this.state){
        html += `<div class=liDiv> 
                    <div class=content><li> ${todo.task} </li></div>
                    <button id=${this.state.indexOf(todo)} class="deleteButton"><i class="fa-solid fa-trash-can"></i></button> 
                    <button id=${this.state.indexOf(todo)} class="editButton"><i class="fa-solid fa-pen-to-square"></i></button> 
                    <button id=${this.state.indexOf(todo)} class="blockButton"><i class="fa-solid fa-lock"></i></button>
                  
                  </div>`;
                
      }
      
  
      let DOMlist = document.getElementById("App");
      DOMlist.innerHTML = html;

      let buttons = document.querySelectorAll(".deleteButton");
      buttons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", (e) => this.deleteByIndex(e.target.id) )
      });

      let buttonsEdit = document.querySelectorAll(".editButton");
      buttonsEdit.forEach((editButton) => {
        editButton.addEventListener("click", (e) => this.editByIndex(e.target.id,e.target.parentElement))
      });
    },
  };
  
  todoList.render();


