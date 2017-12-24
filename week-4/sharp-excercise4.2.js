var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 

// start program
header.display(Robert, Sharp, Excercise 4.2);

var fruit = ["Orange", "Apple", "Mango", "Banana", "Pear"];

// function
function getFruit(fruit) {
    return fruit.sort;
};


// Output from the getFruit() function
console.log(fruit);




// end program
*/
//header
header.display("Robert", "Sharp", "Assignment 4.2");


//getFruit function with the return set to sort alphabetically
function getFruit(fruit)  {
    return fruit.sort();
};

//just the fruits reordered from the example
var fruit = ["Orange", "Apple", "Mango", "Banana", "Pear"];

//calling the function using the array?
console.log(fruit.sort());


//end


