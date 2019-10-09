/*
Add the inequality operator !=in the ifstatement so that the function will return "Not Equal" when valis not equivalent to 99
*/

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testNotEqual(10);