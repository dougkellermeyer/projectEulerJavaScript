//Multiples of 3 and 5

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.


function isDivisible(num, divisor){
    return num % divisor == 0;
};

function findSumByDivisor (){
    var sum = 0;
    for (var i = 0; i < 1000; i++){
        if(isDivisible(i, 3) || isDivisible(i, 5)){
            sum += i;
        }
    }

    return sum;
};

console.log("The answer to Problem 1 is " + findSumByDivisor());
// answer = 233168



