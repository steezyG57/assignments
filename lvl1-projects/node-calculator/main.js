const readline = require("readline-sync");
var readlineSync = require('readline-sync');

var num1 = readlineSync.question("Please enter your first number: ")

var num2 = readlineSync.question("Please enter your second number: ")

console.log( 'Ok, you have entered ' + num1 + ' and ' + num2 + '!');

var operation = readlineSync.question("Now, please enter the operation to perform: (add,sub,mul,div)  ")
if(operation=== 'add'){
    console.log('The result is: ', parseInt(num1) + parseInt(num2))
}
else if(operation=== 'sub') {
    console.log('The result is: ', parseInt(num1) - parseInt(num2))
}
else if(operation=== 'mul') {
    console.log('The result is: ', parseInt(num1) * parseInt(num2))
}
else if(operation=== 'div') {
    console.log('The result is: ', parseInt(num1) / parseInt(num2))
}




 