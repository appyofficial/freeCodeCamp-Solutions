/*
Change the code so that all variables are declared using letor const. Use letwhen you want the variable to change, and constwhen you want the variable to remain constant. Also, rename variables declared with constto conform to common practices, meaning constants should be in all caps.
*/

function printManyTimes(str) {
    "use strict";

    // change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // change code above this line

}
printManyTimes("freeCodeCamp");