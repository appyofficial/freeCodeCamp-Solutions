/*
Using var, declare a globalvariable myGlobaloutside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5to oopsGlobalwithout using the varkeyword.
 */

// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}