//Largest prime factor

//The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const primeNumbers = [];

const remainder = (dividend, divisor) => {
    return dividend % divisor 
};

const isPrime = n => {
    let i = 2;
    const s = Math.sqrt(n)
    
    for (i; i <= s; i++){
        if(!remainder(n,i)){
            return false
        }
    }
    return n && n !== 1;
};

const generatePrimeNumbers = ()=> {
    for (i = 1; i < 10000; i++){
        if (isPrime(i)){
            primeNumbers.push(i);
        }
    }
};
    
generatePrimeNumbers();

const primeFactors = [];

primeNumbers.forEach(function(primeFac){
    n = 600851475143; 
    if (n % primeFac == 0) {
        primeFactors.push(primeFac);
    }
});

const findMaxPrimeFactor = (accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}

console.log('The prime factors of ' + n + ' are '  + primeFactors);
console.log('Max prime factor = ' + primeFactors.reduce(findMaxPrimeFactor));



