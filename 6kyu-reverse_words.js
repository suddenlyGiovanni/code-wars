/*
Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. 
Every space should stay, so you cannot use words from Prelude. 

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
*/


const reverseWords = str => {
    // Go for it
    let newStr = str.slice(0);
    const wordsArr = str.split(' ');
    console.log(wordsArr);
    wordsArr.map( (word, index) => {
        // let wordLength = word.length;
        // let wordIndex = str.indexOf(word);
        let reverseWord = reverseString(wordsArr[index]);
        newStr = newStr.replace(word, reverseWord);
    });

    return newStr;
    
};

const reverseString = str => {
    const splitString = str.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('');
    console.log(joinArray);
    return joinArray;
};






console.log(reverseWords('This is an example!'));
// reverseWords("This is an example!"); 
// returns  "sihT si na !elpmaxe"