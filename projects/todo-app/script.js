

// localStorage.setItem('todo', "Go to market")

// let form = document.getElementById('to-do-form');
// let list = document.getElementById('todo-container');
// let text = document.getElementById('input-text')

// form.addEventListener('submit', function(event){
//   event.preventDefault();
//   // console.log('Hey')
//   console.log(text.value)
//   if(text.value == '' || text.value == undefined){
//     return;
//   }
//   let createdLi = document.createElement('li')
//   let spanElement = document.createElement('span')
//   spanElement.innerText = text.value
//   createdLi.appendChild(spanElement)

//   list.appendChild(createdLi)

// })


let list = document.getElementById('todo-container');
let text = document.getElementById('input-text')

let todos = JSON.parse(localStorage.getItem('todos') || []);
// let todos =  ["Meet a friend", "Complete a project"];

// todos = [{text: "Go to Market", isCompleted: false},{text: "Go to Market", isCompleted: false}, {text: "Go to Market", isCompleted: false}]
// todos = [
//   {text: "Go to Market", isCompleted: false},
//   {text: "Go to Market", isCompleted: false},
//   {text: "Go to Market", isCompleted: false}
// ]


let btn = document.getElementById('submit-button');
function saveTodos(){
  localStorage.setItem('todos', JSON.stringify(todos))
}

function renderTodos(){
  list.innerHTML = '';
  todos.forEach((todo, index) => {
      let createdLi = document.createElement('li');

      if (todo.isCompleted) {
            createdLi.classList.add("completed");
        }


      createdLi.innerHTML = `
      <span>${todo.text}</span>
      <div class="actions">
          <button onclick='toggleTodo(${index})'>✓</button>
          <button onclick="deleteTask(${index})">🗑</button>
        </div>
      `
      list.appendChild(createdLi)
  })
}

function addTodo(){
  let inputText = text.value.trim();
  if(inputText === '') return;
  todos.push({text:inputText, isCompleted: false});
  saveTodos();
  renderTodos();
  text.value = '';
}


function toggleTodo(i){
  console.log('I am clickied')
    todos[i].isCompleted = !todos[i].isCompleted;
  saveTodos();
  renderTodos();
}


function deleteTask(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

btn.addEventListener('click', addTodo)

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   addTodo();
// })



renderTodos();