// A palindromic number reads the same both ways. The largest palindrome 
// made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

//general formula => 3 digit (x) * 3 digit (y) = palindrome

const array1 = []; 
const array2 = [];

//generate 3 digit numbers for product 1 & product 2
const makeProducts = () => {
    for (let i = 1; i < 6; i++){
        array1.push(i);
        array2.push(i);
    }
};

makeProducts();

console.log('array 1 = ' + array1);
console.log('array 2 = ' + array2);

//multiply array1 & array2 to form products array


const multiplyArrays = () => {
    const productsArray = [];
    //grab the first item in the array and multiply that by every
    //member of the other array
    //move on to the next array
    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++) {
            productsArray.push(array1[i]*array2[j]);
        }
    };
    return productsArray;
};

const multiplyArraysOrdered = multiplyArrays().sort((a,b) => a - b);

console.log(multiplyArraysOrdered);


//now we need to check for palindromes

//https://stackoverflow.com/questions/18842861/largest-palindrome-product-in-javascript

const isPalindrome = () => {
    console.log("yep!")
}

isPalindrome();