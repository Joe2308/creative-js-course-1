// global scope
let food = 'apple';
let fruits = 5;

function store() {
    // function scope
    let food = 'banana';
    let fruits = '50'
    console.log(food, fruits);
}

// block scope (loops and if statements)
for (let fruits = 0; fruits < 10; fruits++) {
    console.log(fruits);
}

// This console log is in the global scope
console.log(food, fruits);

// The function variables are only accessible in the function
store();

// to summarise variables defined in the global scope can be used anywhere, 
// and variables defined in the function or block scopes can only be used in their respective functions or blocks

// how to declare a variable and then reassign its value
let veg = 'tomatoe';
veg = 'carrot';
console.log(veg);

// important! it is now good practise to avoid using var to declare variables as it allows you to redeclare same variable name