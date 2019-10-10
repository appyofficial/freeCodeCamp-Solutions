/*
Create a function called randomRangethat takes a range myMinand myMaxand returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
*/

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);