/*
Declare and initialize a variable totalto 0. Use a forloop to add the value of each element of the myArrarray to total.
*/

// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}