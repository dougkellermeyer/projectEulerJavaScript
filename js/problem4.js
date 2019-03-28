// A isPalidrome number reads the same both ways. The largest palindrome 
// made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

//general formula => 3 digit (x) * 3 digit (y) = palindrome

const isPalidrome = (x) => {
    var pal = parseInt(x.toString().split('').reverse().join(''));

    if (pal === x)
        return true;
    else
        return false;
}

//leveraged
//https://stackoverflow.com/questions/18842861/largest-palindrome-product-in-javascript

var x, y, product, max = 0;

for (x = 100; x <= 999; x++) {
    for (y = x; y <= 999; y++) {
        product = x * y;
        if (isPalidrome(product)) {
          if( max < product ) { // this is new
            max = product;
            console.log("The largest palidrome is " + product);
          }
        }
    }
}




