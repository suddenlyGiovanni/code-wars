/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

*/ 
function findUniq(arr) {
    // do magic
    if(arr[0] == arr[1]) {
        return arr.filter(elm => elm !== arr[0]);  
    } else {
        return arr[0];
    }
}
  

console.log(findUniq([ 3, 10, 3, 3, 3 ]));