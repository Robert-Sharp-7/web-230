var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)
var eventKeyCode = 13;

switch (eventKeyCode == 13) {
 case "A":   console.log("The enter key was pressed")
    break; 
 case "B": (eventKeyCode == 16) 
    console.log("The shift key was pressed")
    break; 
 case "C": (eventKeyCode == 32) 
    console.log("The spacebar key was pressed")
    break;
 case "D": (eventKeyCode == 8) 
    console.log("The backspace / delete key was pressed")
    break;
 case "E": 
    console.log("Unrecognized key press")
    break; 
}


// end program