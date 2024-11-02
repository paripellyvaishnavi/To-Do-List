const input =document.querySelector(".input-box");
const button =document.querySelector(".add-Button");
const todoList=document.querySelector(".todo-list");


button.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTodo);

function addTodo(e){
    e.preventDefault();
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText=input.value;
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML='<i class="fa fa-trash"></i>';
    todoDiv.appendChild(deleteButton);
    const completeButton= document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML='<i class="fa fa-check-circle"></i>';
    todoDiv.appendChild(completeButton);
    todoList.appendChild(todoDiv);
    input.value="";
}
function deleteTodo(e) {
    const item=e.target;
    if(item.classList[0] === "delete-btn"){
        const delItem=item.parentElement;
        delItem.remove();
    }
    if(item.classList[0] === "complete-btn"){
        const delItem=item.parentElement;
        delItem.classList.toggle("completed");
    }
}