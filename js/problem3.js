//Largest prime factor

//The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// const primeNumbers = [
//     2,3,5,7,11,13,17,19, 23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97, 101,103,107,109,113,127,131,137,
//     139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277, 281,
//     283,293,307,311,313
// ]

//define a prime number

const primeNumbers = [];

const generatePrimeNumbers = (n, divisor) => {
    n = 2;
    divisor = 2;
    while (n < 100){
        if(n % divisor === 0) {
            divisor++
        } else {
            n % primeNumbers === 0;
            primeNumbers.push(n);
        }
    };
};

generatePrimeNumbers();

const primeFactors = [];

primeNumbers.forEach(function(primeFac){
    n = 13195; 
    if (n % primeFac == 0) {
        primeFactors.push(primeFac);
    }
});

const maxPrimeFactor = (accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}

console.log('Prime numbers = ' + primeNumbers);
console.log('Max prime factor = ' + primeFactors.reduce(maxPrimeFactor));



