//Largest prime factor

//The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//define a prime number

var randomNumbers = [
    1,2,3,4,5,6,7,9,10
]

var primeFactors = [];
//should be 2,3,5,7

function findPrimeFactors (num, divisor) {
    if(num % divisor === 0){
        primeFactors.push(divisor);
    }
}

findPrimeFactors(10);
   

console.log(primeFactors);
