/*
Modify the function abTestso that if aor bare less than 0the function will immediately exit with a value of undefined.

Hint
Remember that undefinedis a keyword, not a string.
*/

// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) {
        return undefined;
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2, 2);