const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNum = document.querySelector('.todo-nr');
const mainTitle = document.querySelector('.main-title');
const nameInput = document.querySelector(".name-input");
const items = todoList.children;

// Add event listener to element and run an anonymous function
button.addEventListener('click', function (e) {
    // Prevent forms normal behaviour of refreshing on submit
    e.preventDefault();
    // Create element
    const newItem = document.createElement('li');
    // Adding class
    newItem.classList.add('item');
    // Adding the text
    newItem.innerText = nameInput.value;
    // Append the new element to ul
    todoList.appendChild(newItem);
    todoNum.innerText = items.length;
    // Clear text from input field after it is submitted
    nameInput.value = "";
    // Create the element and attach the listener
    newItem.addEventListener('click', deleteItem);

    console.log(nameInput);
});

for (item of items) {
    item.addEventListener('click', deleteItem)
}

function deleteItem(e) {
    // Prevent event bubbling
    e.stopPropagation();
    e.target.remove();
}

todoList.addEventListener('click', function () {
    todoList.classList.toggle('fade');
});
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