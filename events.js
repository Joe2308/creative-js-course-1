const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b');
const items = todoList.children;

// Add event listener to element and run an anonymous function
button.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = 'Item 3';
    todoList.appendChild(newItem);
})

todoNr.innerText = items.length;

// todoNr.innerText = items.length;
// console.log(todoNr);
// We can also created an external function and reference it in the eventlistner

// button.addEventListener('click', addItem);

// function addItem() {
//     console.log('newer item added');
// }