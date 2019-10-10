/*
Use multiple conditional operatorsin the checkSignfunction to check if a number is positive, negative or zero.
*/

function checkSign(num) {
    return (num < 0) ? "negative" : (num > 0) ? "positive" : "zero";
}

checkSign(10);