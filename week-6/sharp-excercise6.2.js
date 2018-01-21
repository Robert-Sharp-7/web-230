var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program

try {

    var x = Infinity;

    var y = 1;

    var sum = x+y;

    if (sum == Infinity) throw "Can't go to infinity and beyond, Buzz";

     console.log(sum);

} catch (err) {

    console.log("Catch clause: " + err);

} finally {

    console.log("Finally clause: End of program ...");

}

// end program