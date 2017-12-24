var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
function match() {
    return true;
}
 
function logMismatch(A, C) {
    return false;
console.log("does not match")}

function logMatch(A, B) {
console.log("does match")}

// six (6) test variables 
var A = "car";
var B = "truck";
var C = "bike";
var D = "bike";
var E = 4;
var F = 3;


// Output from the match() function... 
console.log(match(C, D));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (car === truck) {
    logMatch() {
        return true;
} else {
    logMismatch() {
        return false;
}

if (A===C) {
    logMatch();
} else {
    logMismatch(A===C);
}

if (C===D) {
    logMatch();
} else {
    logMismatch(A===C);
}

if (D===E) {
    logMatch();
} else {
    logMismatch(A===C);
}

if (E===F) {
    logMatch();
} else {
    logMismatch(A===C);
}




// end program