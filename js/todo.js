const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
    let li = event.target.parentElement.parentElement;
    if(event.target.localName!="button"){
        li = li.parentElement;
    }
    
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos()
}

function completeToDo(event){
    let text = event.target.parentElement.parentElement;
    if(event.target.localName!="button"){
        text = text.parentElement;
    }
    text = text.querySelector("span");
    text.classList.toggle("complete");
    toDos.forEach(item => {
        if(item.id===Number(text.parentElement.id)){
            if(item.complete===false){
                item.complete = true;
            } else {
                item.complete = false;
            }
        }
    });
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const buttons = document.createElement("div");
    const complete = document.createElement("button");
    const checkmark = document.createElement("i");
    const remove = document.createElement("button");
    const xmark = document.createElement("i");
    xmark.classList.add("fa-solid");
    xmark.classList.add("fa-xmark");
    remove.appendChild(xmark);
    remove.addEventListener("click", deleteToDo);
    checkmark.classList.add("fa-solid");
    checkmark.classList.add("fa-check");
    if(newTodo.complete===true){
        span.classList.add("complete");
    }
    complete.appendChild(checkmark);
    complete.addEventListener("click", completeToDo);
    buttons.appendChild(complete);
    buttons.appendChild(remove);
    li.appendChild(span);
    li.appendChild(buttons);
    toDoList.appendChild(li);
}


function handelToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
        complete : false
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}