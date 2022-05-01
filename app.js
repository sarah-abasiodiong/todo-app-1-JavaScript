const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoListContainer = document.querySelector('#todo-list');

function deleteTodos() {
    let allTodos = document.querySelectorAll('.todo');

    allTodos.forEach(item =>{
        item.addEventListener('click', function() {
            item.remove();            
        })
    })
   }

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let todo = todoInput.value;
   todoListContainer.innerHTML += `<p class="todo">${todo}</p>`;
   todoInput.value = "";
    
   //DELETE TODOS
   deleteTodos()
})

deleteTodos()