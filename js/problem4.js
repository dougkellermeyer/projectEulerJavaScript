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
    //move on to the next array
    for (let i = 0; i < threeDigitList1.length; i++){
            productsArray.push(threeDigitList1[0]*threeDigitList2[i]);
            productsArray.push(threeDigitList1[1]*threeDigitList2[i]);
            productsArray.push(threeDigitList1[2]*threeDigitList2[i]);
            productsArray.push(threeDigitList1[3]*threeDigitList2[i]);
            productsArray.push(threeDigitList1[4]*threeDigitList2[i]);
            productsArray.push(threeDigitList1[5]*threeDigitList2[i]);
            productsArray.push(threeDigitList1[6]*threeDigitList2[i]);
            productsArray.push(threeDigitList1[7]*threeDigitList2[i]);
            productsArray.push(threeDigitList1[8]*threeDigitList2[i]);
    };
    return productsArray.sort((a,b) => a - b);
};

console.log(multiplyArrays());

//now we need to check for palindromes

//https://stackoverflow.com/questions/18842861/largest-palindrome-product-in-javascript

const isPalindrome = () => {
    multiplyArrays.split(',')
}

console.log(isPalindrome());