

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
let btn = document.getElementById('submit-button');
function saveTodos(){
  localStorage.setItem('todos', JSON.stringify(todos))
}

function renderTodos(){
  list.innerHTML = '';
  todos.forEach((todo) => {
      let createdLi = document.createElement('li');
      createdLi.innerHTML = `
      <span>${todo}</span>
      <div class="actions">
          <button>✓</button>
          <button>Delete</button>
        </div>
      `
      list.appendChild(createdLi)
  })
}

function addTodo(){
  let inputText = text.value.trim();
  if(inputText === '') return;
  todos.push(inputText);
  saveTodos();
  renderTodos();
  text.value = '';
}

btn.addEventListener('click', addTodo)

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   addTodo();
// })



renderTodos();