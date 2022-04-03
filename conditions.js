//  == (Equal to)
5 == 5 /* true */

// != (Not equal to)
4 != 5 /* true */

// < (Less than)
5 < 6 /* true */

// > (Greater than)
5 > 4 /* true */

//  <= (Less than or equal to)
10 <= 10 /* true */

//  >= (Greater than or equal to)
10 >= 9 /* true */

// && (Both conditions must be true)
1 == 1 && 2 >= 1 /* true */
1 == 1 && 2 <= 1 /* False */

//  || (This is the or statement only one value must be true)
1 == 1 || 2 >= 3 /* true */
1 == 11 || 2 <= 1 /* False */

// checking data types
10 == '10' /* true */
10 === '10' /* False as 10 is a num and '10' is a string */

// Conditions

// const access = true;

// if (access) {
//     console.log('You have gained access');
// }

// const accessDenied = false;

// if (!accessDenied) {
//     console.log('please sign up first');
// }

// if (access) {
//     console.log('You have gained access')
// } else {
//     console.log('please sign up first');
// }

// if (!access) {
//     console.log('You have gained access')
// } else {
//     console.log('please sign up first');
// }

const age = 5;
bank = 5;

// if (age >= 18 && bank > 15) {
//     console.log('You now have access!');
// } else {
//     console.log('You are too young to access this website!');
// }

// if (age >= 18 || bank > 35) {
//     console.log('You now have access!');
// } else {
//     console.log('You are too young to access this website!');
// }

// if (age >= 18) {
//     console.log('You are old enough, you can enter')
// } else if (bank > 30) {
//     console.log('You have enough money');
// } else {
//     console.log('You are either too young or do not have enough money')
// }


// Falsey values:
// false, 0, "", null, undefined, NaN
const name = NaN;

if (name) {
    console.log('This value is truthy');
} else {
    console.log('This value is falsey');
}