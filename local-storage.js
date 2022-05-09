// Local Storage Remains after closing the browser
// Local storage takes a key value pair as strings only

localStorage.setItem('todo', 'feed the cat');

// Session Storage deletes after closing browser

sessionStorage.setItem('todoList', 'session feeding cat');

// You have to manually clear local storage:

// localStorage.clear();

// sessionStorage.clear();

// Getting stuff back:
const user = localStorage.getItem('todo');
console.log(typeof user);