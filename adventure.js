// generate a random number
// give the user the ability to guess
// if they guess and they are wrong, ask them again (hint);
// if they win - say that they won

// function guessGame() {
//     // we can use Math.random() to generate a random number
//     // we can mulitply by 11 to get a number between 0 and 10 as math.round will always round down to 9 when multiplying by 10
//     let randomNr = Math.random() * 11
//     // We can use math.floor to round down a whole int and get rid of the trailing dec
//     let fixedNr = Math.floor(randomNr);
//     console.log(fixedNr);
// }

// guessGame();

// Lets build the game!
function guessGame() {
    // Step 1 - creat a whole number between 0 and 10
    let randomNr = Math.floor(Math.random() * 11);
    // define the guess variable outside of the loop, this lets us access the variable in the why part of the loop
    let guess;
    // Step 2- give user ability to guess
    // Create a do while loop that continues until user inputs the correct number
    do {
        guess = prompt('Guess a number between 1 and 10');
        console.log(guess, randomNr)
        if (guess < randomNr) {
            console.log('Sorry, you guessed too low!');
        } else if (guess > randomNr) {
            console.log('Sorry, you guessed too high!')
        }
        // run the above loop while guess is not equal to randomNr 
        // If guess is equal to randomNr the loop will stop
    } while (guess != randomNr);
    console.log('You won!');
}

guessGame();