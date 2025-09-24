const readline = require('readline-sync');

let firstName = readline.question("What is your first name? ");
let validIndex = firstName.length - 1;
let index = readline.question("Please choose a number between 0 and " + validIndex + ".");
console.log("validIndex is " + validIndex);

console.log("The number you chose, " + index + " corresponds wtih the letter " + firstName[index] + " of your name.");
