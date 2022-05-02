export const todoList ={
    state:[
      "estudiar",
      "practicar katas",
      "estudiar bases de dades relacionades",
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
  
    render(){
      let html= '';
  
      for (const todo of this.state){
        html += `<div class=liDiv> 
                    <li> ${todo} 
                    <button id=${this.state.indexOf(todo)} class="deleteButton">delete</button></li>
                </div>`;
                
      }
      
  
      let DOMlist = document.getElementById("App");
      DOMlist.innerHTML = html;

      let buttons = document.querySelectorAll(".deleteButton");
      buttons.forEach((button) => {
        button.addEventListener("click", (e) => this.deleteByIndex(e.target.id) )
      });
    },
  };
  
  todoList.render();