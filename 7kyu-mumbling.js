/*
This time no story, no theory. 
The examples below show you how to write function accum:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/


function accum(s) {
    // your code
    let retArr = [];
    s.toLowerCase().split('').map((chr, index) => {
        let subArr = Array(index + 1).fill(chr);
        subArr[0] = chr.toUpperCase();        
        console.log(subArr);
        retArr.push(subArr.join(''));
    });
   
    console.log(retArr);
    
    return retArr.join('-');
}

console.log(accum('ZpglnRxqenU'));