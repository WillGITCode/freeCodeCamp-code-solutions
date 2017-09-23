/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder
*/

function sumFibs(num) {
    var sum = 0;
    var currentNum = 1;
    var nextNum = 1;
    var biggerNum = 0;
    var arr = [];
    for (var i = 0; biggerNum <= num; i++) {
        if (currentNum > nextNum) {
            biggerNum = currentNum;
        } else {
            biggerNum = nextNum;
        }
        if (currentNum >= nextNum) {
            arr.push(nextNum);
            if (nextNum % 2 !== 0) {
                sum += nextNum;
            }
            nextNum += currentNum;

        } else {
            if (currentNum < nextNum) {
                arr.push(currentNum);
                if (currentNum % 2 !== 0) {
                    sum += currentNum;
                }
                currentNum += nextNum;

            }
        }
    }
    return sum;

}
sumFibs(75025);
