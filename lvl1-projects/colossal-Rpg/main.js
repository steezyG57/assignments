const readlineSync = require("readline-sync");
const welcome = readlineSync.question("Welcome to the Colossal Role-Playing Game! Follow the forbidden path to embark on your journey to your salvation!")
let distanceLeftToTravel = 100;
console.log("\nWelcome " + welcome + "! You have " + distanceLeftToTravel + "ft left on the path to salvation! Good luck..")

let playerName = welcome;
let playerHp = 100;
let inventory = {potion: 0}
let enemies = ['Knight', 'Orc', 'Dragon'];
let randomEnemy = () => enemies[Math.floor(Math.random() * enemies.length)];

function walk () {
    let walking = readlineSync.keyIn("\nWhat shall you do?\n\n[w]Walk Forward [p]Player info [q]Quit ", {limit: "wpq"})
    let chanceofBeingAttacked = Math.floor(Math.random() * 100);
    let playerStats = "\n\nPlayer Name: " + playerName + "\nHealth: " + playerHp + "\nInventory: " + inventory.potion + " potion(1)";
    if (walking === "w" && distanceLeftToTravel >= 0) {
        let distanceWalked = Math.floor(Math.random() * 25)
        distanceLeftToTravel = distanceLeftToTravel - distanceWalked;
        console.log("\nDistance left on the path: " + distanceLeftToTravel + " ft.")
        if (chanceofBeingAttacked > 25) {
            walk()
        }   else {
            const enemy = randomEnemy ()
            fightEnemy(enemy, 50)
        }
    } else if (walking === "p") {
        console.log(playerStats)
    } else if (walking === "q") {
        console.log("\nGame Over!\n")
        distanceLeftToTravel = -1
    } else if (distanceLeftToTravel <= 0) {
        distanceLeftToTravel = -1
        console.log("\nHooray! You've reached the end of the path, your salvation awaits!\n")
    }
}







































































































































































































// const readline = require('readline-sync')

// Console.log("welcome statement")

// const name =  readline.question("What is your name? ")

// console.log("Welcome" + name)
// characterHP = 100 
// const inventory = []
// inventory.push("sword")

// while(characterHP > 0) {

// const options = ["walk", "check inventory", "leave game"]

// const selected = readline.keyinselect(options, "What would you like to do?")

// console.log("you picked" + options [selected])
// characterHP -= 10
// console.log(characterHP)

// if(selected === 0) {
// 	walk()
// 	} else if(selected === 1){
// 	checkInv()
// 	}
// }

// function walk(){
// 	console.log("you walked..")
// 	const chanceOfEncounter = Math.floor(Math.random()* 10) 

// if(inventory = 10)

// console.log("you died!")
