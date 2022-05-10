// // Local Storage Remains after closing the browser
// // Local storage takes a key value pair as strings only

// localStorage.setItem('todo', 'feed the cat');

// // Session Storage deletes after closing browser

// sessionStorage.setItem('todoList', 'session feeding cat');

// // You have to manually clear local storage:

// // localStorage.clear();

// // sessionStorage.clear();

// // Getting stuff back:
// const user = localStorage.getItem('todo');
// console.log(typeof user);

// localStorage.clear();
// sessionStorage.clear();

// Now lets try to store an array to local storage
const todoList = ['feed the cat', 'wash', 'listen to some music'];

// Use the JSON.stringify method
localStorage.setItem('todos', JSON.stringify(todoList));

// Use JSON.parse method to return array to its oriinal form
const retrieved = JSON.parse(localStorage.getItem('todos'));

console.log(retrieved);

// The above methods can be used with objects aswell