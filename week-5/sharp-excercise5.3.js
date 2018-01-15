var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program

console.log(header.display("Robert", "Sharp", "Excercise 5.3"));
console.log("\n");

var famousComposers = [

//array like object below

{

firstName: 'Dizzy',

lastName: 'Gillespie', 

genre: 'Trumpet',

rating: '8',

},

{

firstName: 'Charles',

lastName: 'Mingus', 

genre: 'Bass',

rating: '10',

},

{

firstName: 'Gordon',

lastName: 'Goodwin', 

genre: 'Piano',

rating: '9',

},

{

firstName: 'Charlie',

lastName: 'Parker', 

genre: 'Saxophone',

rating: '6',

},

{

firstName: 'Buddy',

lastName: 'Rich', 

genre: 'Drums',

rating: '7',

},

];

//logs concatenated string using array-like object contents

famousComposers.forEach(function(musician) 
    {
    console.log(musician.firstName + " " + musician.lastName + " " + musician.genre + " " + musician.rating)});


// end program