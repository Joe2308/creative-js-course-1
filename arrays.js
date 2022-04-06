// We can store multiple variables in an array

const listUsers = ['Joe', 'Johnny', 'John Snow', 'You'];

console.log(listUsers[0]);

// listUsers is an object
console.log(typeof listUsers);

// This means we can apply built in methods to an object just add a dot at end of the variable name 

// listUsers.unshift('New Name', 'Second Name');
// console.log(listUsers.length);

// A very useful method is indexOf which will give you the position of an item in an array
position = listUsers.indexOf('Joe');
console.log(position);