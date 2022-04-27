const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNum = document.querySelector('.todo-nr');
const mainTitle = document.querySelector('.main-title');
const items = todoList.children;

// Add event listener to element and run an anonymous function
button.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = `Item ${items.length +1} `;
    todoList.appendChild(newItem);
    todoNum.innerText = items.length;
    // Create the element and attach the listener
    newItem.addEventListener('click', deleteItem);
});

for (item of items) {
    item.addEventListener('click', deleteItem)
}

function deleteItem(e) {
    console.log('delete', e.target);
}
// todoNr.innerText = items.length;
// console.log(todoNr);
// We can also created an external function and reference it in the eventlistner

// button.addEventListener('click', addItem);

// function addItem() {
//     console.log('newer item added');
// }


// button.addEventListener('keydown', function (e) {
//     if (e.keyCode === 81) {
//         mainTitle.classList.toggle('change');
//     }
// })