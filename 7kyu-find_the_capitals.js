/*
Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = word => {
    // Write your code here
    let idxUpperCase = [];
    word.split('').map(( letter, index ) => letter === letter.toUpperCase() && idxUpperCase.push(index));
    return idxUpperCase;
};

console.log(capitals('CodEWaRs'));