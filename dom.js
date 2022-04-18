// // // document.title = "We changed it!"

// // // const header = document.getElementsByTagName('h2');

// // // console.log(header);

// // const headers = document.getElementsByTagName('h2');

// // console.log(headers[0]); /** Selecting in the dom */
// // console.log(headers[1]); /** Hello */
// // console.log(headers[2]); /** Header 2 */


// // const list = document.getElementsByClassName('item');

// // console.log(list.length);

// // const button = document.getElementById('submit');
// // console.log(button); /* Will only return the first id it finds */

// // QUERY SELECTORS

// // Allows us to use one js query to get different elements

// // const headers = document.querySelector('h2'); /** Will only return first h2 it finds in the dom */
// // console.log(headers);

// // const allHeaders = document.querySelectorAll('h2'); /** Will return all h2s as a node list */
// // console.log(allHeaders);

// // const list = document.querySelectorAll('.item');
// // console.log(list);

// // // query a specific class when mulitple classes have the same name

// // const specificItem = document.querySelector('h2.item');
// // console.log(specificItem);

// // // Drill down to anchor tag from parent ul element
// // const drill = document.querySelector('#list a');
// // console.log(drill);


// // COLLECTIONS AND NODELISTS

// // // Child nodes accesses all items

// // The difference in querying a html collection and a nodelist is that a html collection only returns the element node items
// // Whereas a node list returns nodes aswell as all the space around them for example you can add comments


// // const nodeItem = document.querySelector('#todo-list');

// // // Child nodes accesses all items
// // console.log(nodeItem.childNodes);

// // // Children access element nodes
// // console.log(nodeItem.children);


// // // WE CAN LOOP OVER NODE ITEMS

// // const nodeItem = document.querySelectorAll('.item');

// // for (i = 0; i < nodeItem.length; i++) {
// //     console.log(nodeItem[i]);
// // }

// // // OR
// // for (item of nodeItem) {
// //     console.log(item);
// // }


// // WE CAN USE JAVASCRIPT TO ADD A LIST ELEMENT TO OUR UL

// const collectionItems = document.getElementsByClassName('item');
// const todoList = document.getElementById('todo-list');
// const todoNr = document.getElementsByClassName('todo-nr')[0];
// console.log(collectionItems);

// const newItem = document.createElement('li');
// newItem.classList.add('item');
// newItem.innerText = 'Item 3';

// todoList.appendChild(newItem);

// // UPDATE THE AMOUNT OF ITEMS THAT WE HAVE
// todoNr.innerText = collectionItems.length;



// USING QUERY SELECTORS ON THE SAME EXAMPLE
// YOU CAN APPEND CHILD BUT THE COLLECTIONITEMS WILL NOT AUTO UPDATE!

// const collectionItems = document.querySelectorAll('.item');
// const todoList = document.querySelector('#todo-list');
// const todoNr = document.querySelector('.todo-nr');

// const newItem = document.createElement('li');
// newItem.classList.add('item');
// newItem.innerText = 'Item 3';

// todoList.appendChild(newItem);

// // UPDATE THE AMOUNT OF ITEMS THAT WE HAVE
// todoNr.innerText = collectionItems.length;

// console.log(collectionItems);

// WE CAN SOLVE THE AUTO UPDATE ISSUE ON STATIC QUERY SELECTORS BY CONVERTING TO CHILDREN
const todoList = document.querySelector('#todo-list');
const items = todoList.children;
console.log(items);
const todoNr = document.querySelector('.todo-nr');

const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = 'Item 3';

todoList.appendChild(newItem);

// UPDATE THE AMOUNT OF ITEMS THAT WE HAVE
todoNr.innerText = items.length;

console.log(Items);