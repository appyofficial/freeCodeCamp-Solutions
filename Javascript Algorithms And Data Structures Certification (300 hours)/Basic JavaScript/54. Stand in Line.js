/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queueand old items are taken off from the front of the queue.

Write a function nextInLinewhich takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLinefunction should then return the element that was removed.
 */

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();  // Change this line
}