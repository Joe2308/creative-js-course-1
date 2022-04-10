// For loops
// for (let i = 0; i <= 100; i++) {
//     if (i === 20) {
//         console.log('You have reached the number twenty!');
//         continue;
//     } else if (i === 57) {
//         console.log('You have now reached 57, we will stop here!');
//         break;
//     }
//     console.log(i);
// }


// If we have an array and we dont know how many items in it we can use the length method

// const texts = ['singing in the park', 'watching myself dance', 'Dogo is danger', 'cat is black'];

// for (let i = 0; i < texts.length; i++) {
//     // console log the number of items in array
//     // console.log(i);
//     // console log the strings in their order in array
//     console.log(texts[i]);
// }


// The following is a newer simpler way to do for loops for arrays

const names = ['Joe', 'Barbie', 'Logic', 'Mf Doom', 'Tool'];

// for (let name of names) {
//     // print the strings
//     console.log(name);
//     // get the index of the strings
//     console.log(names.indexOf(name));
// }

// for (let name of names) {
//     if (name === 'Mf Doom') {
//         console.log('We have found the name you requested, the loop will now stop');
//         break;
//     }
//     console.log(name);
// }

// We can also use 'for each' loops specifically for arrays
// forEach() is also slower than a for of loop
// We cannot break out of a for each loop as the loop is inside of a function, we can only break out of loops
// Because of this you need to decide when it is appropriate to use for each loops over standard loops

// names.forEach(function (name, index) {
//     console.log(name, index);
// })


// To loop over objects we can use forIn

const user = {
    name: 'Joe',
    age: 23,
    subscribers: 200,
    money: 'lolno'
}

// Return the property keys
// for (let x in user) {
//     console.log(x);
// }

// access the property value
// console.log(user.money);

// We can also access the property value like this
// console.log(user['money']);

// Return the property values
// for (let x in user) {
//     console.log(user[x]);
// }

// Other loops are, While and Do While
// !Important - When using loops always use an increment to prevent an infinite loop
// let i = 20

// while (i < 30) {
//     console.log(i);
//     // Be sure to add an increment or decrement to prevent infinite loop!
//     // increment by 10
//     i += 5;
// }


//  A Do While loop will run regardless whether statement is true or false
let i = 0;

do {
    console.log(i);
    i++;
}
while (i > 30);