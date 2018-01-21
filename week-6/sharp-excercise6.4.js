var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {
    // ticket properties
        id:"FN-2187",
        name: "Finn",
        dateCreated: "December 18, 2015",
        priority: "1",
        personId: "First Order",

    person: {
        id:"CPhasma",
        firstName:"Cpt.",
        lastName:"Phasma",
        jobTitle:"Commander, First Order"
        // person properties
    }
};

console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + ", and assigned to employee " 
            + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");



// end program