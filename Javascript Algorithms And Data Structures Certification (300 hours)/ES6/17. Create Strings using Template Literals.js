/*
Use template literal syntax with backticks to display each entry of the resultobject's failurearray. Each entry should be wrapped inside an lielement with the class attribute text-warning, and listed within the resultDisplayArray.
*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";
    // change code below this line
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let output = `<li class="text-warning">${arr[i]}</li>`;
        arr2.push(output);
    }
    return arr2
    // change code above this line
    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);