var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program

console.log(header.display("Robert", "Sharp", "Excercise 5.2"));
console.log("\n");

var food = ["sushi", "oysters", "steak", "shrimp", "tacos"];

//function iterates through the array and logs the value

food.forEach(function(num) {console.log(num)});








// end program