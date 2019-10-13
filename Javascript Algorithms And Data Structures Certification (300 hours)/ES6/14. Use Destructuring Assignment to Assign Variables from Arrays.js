/*
Use destructuring assignment to swap the values of aand bso that areceives the value stored in b, and breceives the value stored in a.
*/

let a = 8, b = 6;
(() => {
    "use strict";
    // change code below this line
    [a, b] = [6, 8]
    // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8