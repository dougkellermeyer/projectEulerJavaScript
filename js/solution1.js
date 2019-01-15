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



