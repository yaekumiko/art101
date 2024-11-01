// Author: Miki Foster
// Created: 31 October 2024

// create a function that multiplies an array by 5
function multiplyFive(x) {
    return x * 5;
}

function isOdd(x) {
    return x % 2 != 0;
}

// test function 
console.log("Is 5 odd?", isOdd(5));
console.log("Is 8 odd?", isOdd(8));

array = [17, 33, 29, 90, 500, 1004, 2002, 1998]
console.log("My array", array);

// test for odd numbers in array
var oddCheckresult = array.map(isOdd);
console.log("Test for odd numbers of array", oddCheckresult);

// test for division by 2 in array
var divisionResult = array.map(function(x) {
    return x / 2;
});
console.log("Test for division of 2", divisionResult);

// test for multiplication by 5 in array
var multiplyResult = array.map(multiplyFive);
console.log("Test for multiplation by 5 of array", multiplyResult);

