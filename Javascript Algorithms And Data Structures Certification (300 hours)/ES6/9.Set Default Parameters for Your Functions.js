/*
Modify the function incrementby adding default parameters so that it will add 1 to numberif valueis not specified.
*/

const increment = (function () {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6