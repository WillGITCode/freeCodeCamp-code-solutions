/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()
*/

function sumPrimes(num) {
    var primeArr = [];
    var sum = 0;

    for (var i = 0; i <= num; i++) {
        var divisable = 2;
        for (var j = 0; j <= i / 2; j++) {
            if (i !== 0 && i !== 1 && i !== j) {
                if (i % j === 0) {
                    divisable++;
                }
            }
        }
        if (divisable === 3) {
            primeArr.push(i);
        }
    }
    for (var k = 0; k < primeArr.length; k++) {
        sum += primeArr[k];
    }

    return sum;
}

sumPrimes(977);
