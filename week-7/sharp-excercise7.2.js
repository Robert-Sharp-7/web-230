var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program



// end program

function Employee (id, firstName, lastName, title) 
{
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}
    
var employees = [
    new Employee("1", "Gordon", "Goodwin", "Pianist"),

    new Employee("2", "Charles", "Mingus", "Bassist"),

    new Employee("3", "Buddy", "Rich", "Drummer"),

    new Employee("4", "Charlie", "Parker", "Saxophonist"),

    new Employee("5", "Dizzy", "Gillespie", "Trumpet")
];

for (var x = 0; x <= 4; x++) {

    console.log(employees[x])
}