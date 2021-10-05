const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Welcome to your death, err.. I mean the escape room. Find the key in the room to escape. Choose your next move carefully..")

var gameOver = false
var options = ["Put hand in hole" , "Find the key" , "Open the door" ]

while (!gameOver) {
    var questionOne = readline.keyInSelect(options, "What's your move?" );
    if (questionOne === 0) {
        console.log("You're Dead!")
        gameOver = true
    }
    else if (questionOne === 1) {
        console.log("Congrats, you found the key!")
        gameOver = true
    }
    else if (questionOne === 2) {
        console.log("Oops, you don't have the key!")
        gameOver = true
    }
    else {
        console.log("Try again!")
    }
}