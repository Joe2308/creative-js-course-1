// function greet(param) {
//     console.log("Welcome to our website " + param);
// }

// function signUp() {
//     let name = prompt("What is your name?");
//     greet(name);
// }

// signUp();

// function max(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
// }

// max(4, 5);

function calc(num1 = 0, num2 = 0) {
    add = num1 + num2;
    console.log(add);
    multiply = num1 * num2;
    console.log(multiply);
    divide = num1 / num2;
    console.log(divide);
    remain = num1 % num2;
    console.log(remain);
}

calc(5, 3);