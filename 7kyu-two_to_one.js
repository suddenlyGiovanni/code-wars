/*
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. 

#Examples: 
a = "xyaabbbccccdefww" 
b = "xxxxyyyyabklmopq" 

longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/ 



// function longest(s1, s2) {
//     // your code
//     let s1Arr = s1.toLowerCase().split('').sort();
//     let s2Arr = s2.toLowerCase().split('').sort();    
//     // console.log(s1Arr);
//     // console.log(s2Arr);
//     const s1FiltArr = new Set(s1Arr);    
//     const s2FiltArr = new Set(s2Arr);
//     // console.log(s1FiltArr);
//     // console.log(s2FiltArr);
//     let retArr = new Set();
//     s1FiltArr.forEach(elm=>retArr.add(elm));
//     s2FiltArr.forEach(elm=>retArr.add(elm));
//     // console.log(retArr);
//     return [...retArr].sort().join('');
// }


function longest(s1, s2) {
    const s1FiltArr = new Set((s1+s2).toLowerCase().split('').sort());    
    let retArr = new Set();
    s1FiltArr.forEach(elm=>retArr.add(elm));
    return [...retArr].sort().join('');
}


console.log(longest('aretheyhere', 'yestheyarehere'));