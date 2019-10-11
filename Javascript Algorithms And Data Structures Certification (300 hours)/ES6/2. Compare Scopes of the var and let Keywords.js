/*
Fix the code so that ideclared in the if statement is a separate variable than ideclared in the first line of the function. Be certain not to use the varkeyword anywhere in your code.

This exercise is designed to illustrate the difference between how varand letkeywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.
*/

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}