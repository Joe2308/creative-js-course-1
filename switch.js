// We can use a switch statment to compare cases instead of running long nested if else statements

// let text = 'banana';
// let fruitNr = 0;

// switch (text) {
//     case "Orange":
//         console.log("I am not a fan of orange.");
//         fruitNr = 1;
//         break;
//     case "banana":
//         console.log("Banana is good!");
//         fruitNr = 2;
//         break;
//     case "Apple":
//         console.log("How you like them apples?");
//         fruitNr = 3;
//         break;
//     default:
//         console.log("I have never heard of that fruit...");
//         break;
// }

// It's always a good idea to use a default case if none of our switch cases are true
// Think of default as the else statement


// Example of a game using switch statements

let userInput = prompt('Tell me a fruit');
let convertedValue = userInput.toLowerCase();

switch (convertedValue) {
    case 'banana':
        alert('Monkeys eat bananas');
        break;
    case 'mandarin':
        alert('We just bought mandarins in Super Value');
        break;
    case 'apple':
        alert('An apple a day keeps the doctor away');
        break;
    default:
        alert('Sorry I do not recognise that fruit yet, please pick another fruit, Hint: I am only programmed for banana, mandarin and apple!')
}