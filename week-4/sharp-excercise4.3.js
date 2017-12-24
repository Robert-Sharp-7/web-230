var header = require('../header.js');

/* example commented out
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus



// start program



// function
function getValue(arr, val) {

}


// Output



// end program
*/
//header
header.display("Robert", "Sharp", "Assignment 4.3");

var vehicles = ["car", "boat", "motorcycle", "plane", "bus"];

//using val to designate car, then it'll be filtered against
var val = vehicles[0]

/*trying to use the for loop to iterate through the function and then
omit car*/

function getValue(vehicles, val) 
{
    for (var k =0; k <= vehicles.length;k++)
{
    if (vehicles[k] != val)
{
    return vehicles[k]
}
    }
};


//still not getting the output that I want, I keep getting undefined


console.log (vehicles)




