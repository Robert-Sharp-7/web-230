var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...
function fullName(firstName, lastName) {
    return "Hello my name is " + firstName + " " + lastName + "!";
}

function dateWriter(year, month, day) {
    return "Today's date is " + year+ "-"+ month+ "-"+ day+ " and the current temperature is " + formatNumber(4, 0)

}

function formatNumber(number, fixedPosition) {
var formatNumber = number + fixedPosition.toFixed(1);
    return formatNumber;

}

function convertToInt(string) {
var parseInt = Number(string);    
    return "I am " +parseInt +" and my savings account goal is "+convertToFloat("99999"); 
}

function convertToFloat(savings) {
var parseFloat = Number(savings);
return parseFloat;
}

// output 
console.log(header.display("Robert", "Sharp", "Assignment 2.4")); 
console.log('\n'); 
console.log(fullName("Robert", "Sharp"));
console.log('\n');
console.log(dateWriter(2017, 12, 10));
console.log('\n');
console.log(convertToInt("24")); 


// end program 