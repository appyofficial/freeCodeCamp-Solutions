/*
Combine the two ifstatements into one statement which returns "Outside"if valis not between 10and 20, inclusive. Otherwise, return "Inside".
*/

function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

// Change this value to test
testLogicalOr(15);