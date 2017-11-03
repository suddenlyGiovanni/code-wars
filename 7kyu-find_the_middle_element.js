/*
As a part of this Kata, you need to create a function that when provided with a triplet, 
returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
*/

var gimme = function (inputArray) {
    // Implement this function
    const sortedArray = inputArray.slice(0).sort((a, b) => a - b);
    console.log(sortedArray);
    return inputArray.indexOf(sortedArray[1]);
};

console.log(gimme([2, 3, 1]));