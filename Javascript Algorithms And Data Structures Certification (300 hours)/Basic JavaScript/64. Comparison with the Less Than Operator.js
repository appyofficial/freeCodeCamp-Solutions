//Add the less thanoperator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
testLessThan(10);