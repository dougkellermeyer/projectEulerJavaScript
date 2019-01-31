const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;


// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
// since initial value is given, acc = 5 and curr = 1

const array2 = [0, 1, 2, 3];
const reducer2 = (accum, currVal) => accum + currVal;

console.log(array2.reduce(reducer2, 5)); //11 (5 + 0 + 1 + 2 + 3)