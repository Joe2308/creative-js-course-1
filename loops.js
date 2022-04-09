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

const texts = ['singing in the park', 'watching myself dance', 'Dogo is danger', 'cat is black'];

for (let i = 0; i < texts.length; i++) {
    // console log the number of items in array
    // console.log(i);
    // console log the strings in their order in array
    console.log(texts[i]);
}