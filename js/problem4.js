// A palindromic number reads the same both ways. The largest palindrome 
// made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

//general formula => 3 digit (x) * 3 digit (y) = palindrome

const threeDigitList1 = []; 
const threeDigitList2 = [];

//generate 3 digit numbers for product 1 & product 2
const makeProducts = () => {
    for (let i = 1; i < 10; i++){
        threeDigitList1.push(i);
        threeDigitList2.push(i);
    }
};

makeProducts();

console.log('array1 = ' + threeDigitList1);
console.log('array2 = ' + threeDigitList2);

//multiply threeDigitList1 & threeDigitList2 to form products array


const multiplyArrays = () => {
    const productsArray = [];
    //grab the first item in the array and multiply that by every
    //member of the other array
    for (let i = 0; i < threeDigitList1.length; i++){
        threeDigitList1.map(threeDigitiLst1[0]*
    }
    return productsArray;
};

console.log(multiplyArrays());
