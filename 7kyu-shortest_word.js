/*
x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s){
    let wordsLength = [];
    s.split(' ').map(word => {
        wordsLength.push(word.length);
    });
    return Math.min.apply(null, wordsLength);
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));