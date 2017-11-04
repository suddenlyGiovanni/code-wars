/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence:
"The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, 
detect whether or not it is a pangram. 
Return True if it is, False if not. 
Ignore numbers and punctuation.

*/
const string = 'The quick brown fox jumps over the lazy dog.';

// function isPangram(string){
//     //...
//     const abc = 'abcdefghijklmnopqrstuvwxyz';
//     let sortedStr = string.toLowerCase().split(' ').join('').split('').sort().filter(el => el.match(/^[a-z]+$/i));
//     console.log(sortedStr);
//     const reducedStr = new Set(sortedStr);
//     const strToCompare = [...reducedStr].join('');
//     console.log(strToCompare);
//     if (abc == strToCompare ) {
//         return true;
//     }
//     return false;
// }


function isPangram(string){
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const reducedStr = new Set(string.toLowerCase().split(' ').join('').split('').sort().filter(el => el.match(/^[a-z]+$/i)));
    const strToCompare = [...reducedStr].join('');
    return abc === strToCompare ? true : false;
}

console.log(isPangram(string));