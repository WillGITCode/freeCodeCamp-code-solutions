/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple
*/

function smallestCommons(arr) {
    var comArr = [];
    var multiples = 0;
    var x = true;

    arr.sort(function(a, b) { return a - b; });

    for (var i = arr[0]; i <= arr[1]; i++) {
        comArr.push(i);
    }

    while (x) {
        multiples++;
        for (var j = comArr[0]; j <= comArr[comArr.length - 1]; j++) {
            if (multiples % j !== 0) {
                break;
            } else if (j == comArr[comArr.length - 1]) {
                x = false;
            }
        }
    }

    return multiples;
}


smallestCommons([23, 18]);
