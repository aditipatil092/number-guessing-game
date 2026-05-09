// Assignment 1: Multiplication Table
let number = 5;

console.log("Multiplication Table of " + number);

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// Assignment 2: Check Prime Number
let primeNumber = 7;
let isPrime = true;

if (primeNumber <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(primeNumber + " is a prime number");
} else {
    console.log(primeNumber + " is not a prime number");
}


// Assignment 3: Sum from 1 to 100
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum of numbers from 1 to 100 is: " + sum);


// Assignment 4: Number Guessing Game with 5 Attempts
let secretNumber = 6;
let maxAttempts = 5;
let isGuessed = false;

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let userGuess = Number(prompt("Attempt " + attempt + ": Guess the number between 1 and 10"));

    if (userGuess === secretNumber) {
        alert("Correct! You guessed the number.");
        console.log("User guessed correctly in attempt " + attempt);
        isGuessed = true;
        break;
    } else if (userGuess < secretNumber) {
        alert("Too low. Try again.");
        console.log("Attempt " + attempt + ": Too low");
    } else if (userGuess > secretNumber) {
        alert("Too high. Try again.");
        console.log("Attempt " + attempt + ": Too high");
    } else {
        alert("Invalid input. Please enter a number.");
        console.log("Attempt " + attempt + ": Invalid input");
    }
}

if (!isGuessed) {
    alert("Failed! You could not guess the number in 5 attempts.");
    console.log("Failed! The correct number was " + secretNumber);
}