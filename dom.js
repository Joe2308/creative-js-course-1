// // document.title = "We changed it!"

// // const header = document.getElementsByTagName('h2');

// // console.log(header);

// const headers = document.getElementsByTagName('h2');

// console.log(headers[0]); /** Selecting in the dom */
// console.log(headers[1]); /** Hello */
// console.log(headers[2]); /** Header 2 */


// const list = document.getElementsByClassName('item');

// console.log(list.length);

// const button = document.getElementById('submit');
// console.log(button); /* Will only return the first id it finds */

// QUERY SELECTORS

// Allows us to use one js query to get different elements

const headers = document.querySelector('h2'); /** Will only return first h2 it finds in the dom */
console.log(headers);

const allHeaders = document.querySelectorAll('h2'); /** Will return all h2s as a node list */
console.log(allHeaders);

const list = document.querySelectorAll('.item');
console.log(list);

// query a specific class when mulitple classes have the same name

const specificItem = document.querySelector('h2.item');
console.log(specificItem);

// Drill down to anchor tag from parent ul element
const drill = document.querySelector('#list a');
console.log(drill);