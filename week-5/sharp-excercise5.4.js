var header = require('../header.js');

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program

console.log(header.display("Robert", "Sharp", "Excercise 5.4"));
console.log("\n");

var famousComposers = [
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
    }
];

var comnposersByRating = famousComposers.map(function(composer) {

});

var composersByGenre = famousComposers.map(function(composer) {

});

console.log("-- COMPOSER BY RATING --");

//outputs just the last name and rating

famousComposers.forEach(function(musician) 
    {
    console.log(musician.lastName + "\n" + musician.rating + "\n")});

console.log("-- COMPOSER BY GENRE --");

//outputs last name and genre, although I used their instruments instead

famousComposers.forEach(function(musician) 
    {
    console.log(musician.lastName + "\n" + musician.genre)});

// end program