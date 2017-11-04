/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

example:
alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.
*/

const abc = 'abcdefghijklmnopqrstuvwxyz';
function alphabetPosition(text) {
    let wordArr = text.split(' ');
    let idxArr = [];
    wordArr.forEach(word => {
        console.log(word)
        let chrArr = word.toLowerCase().split('');
        console.log(chrArr);
        chrArr.map(chr => {
            let chrIdx = abc.indexOf(chr.toLowerCase()) + 1;
            console.log(chrIdx);
            if (chrIdx >= 0) {
                console.log(chrIdx);
                idxArr.push(chrIdx)
            }
        });
    }, this);
    console.log(idxArr)
    return idxArr.join(' ');
}




console.log(alphabetPosition('The sunset sets at twelve o\' clock.'));