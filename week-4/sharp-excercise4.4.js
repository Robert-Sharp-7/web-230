var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
header.display("Robert", "Sharp", "Assignment 4.4");

//dog array

var dogs = ["lab","boxer", "pit bull", "schnauzer", "bull dog"]

// function
function getValue(x, val) {
    if (x==val)
        return val;
}


dogs.filter(getValue)

console.log("pit bull")
// Outputting results

console.log(dogs)

console.log(dogs.sort())




// end program
