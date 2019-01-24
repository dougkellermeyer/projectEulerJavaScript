//Largest prime factor

//The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//define a prime number
var notPrimeNumbers = [];
var primeNumbers2 = [2,3,5,7, 11];

function generatePrimeNumbers(){
    for (i = 2; i < 1000; i++){
        if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0 || i  % 11 === 0) {
            notPrimeNumbers.push(i);
        } else {
            primeNumbers2.push(i);
        }
    }
};

generatePrimeNumbers();

var primeNumbers = [
    2,3,5,7,11,13,17,19, 23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97, 101,103,107,109,113,127,131,137,
    139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277, 281,
    283,293,307,311,313
]

var primeFactors = [];

primeNumbers.forEach(function(primeNum){
    n = 13195; 
    if (n % primeNum == 0) {
        primeFactors.push(primeNum);
    }
});

var maxPrimeFactor = primeFactors.reduce(function(a,b){
    return Math.max(a,b);
});

console.log("------------Method 1------------");   
console.log(primeFactors);
console.log(maxPrimeFactor);
console.log("------------Mehod 2-------------");
console.log(primeNumbers2);



