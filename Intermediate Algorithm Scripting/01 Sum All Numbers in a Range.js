/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/

function sumAll(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var sum = min + max;
    for (i = min; i < max - 1; i++) {
        min++;
        sum = sum + min;
    }

    return sum;
}

sumAll([5, 10]);


// Simpler code on second try

function sumAll(arr) {
    arr = arr.sort(function(a, b){return a-b;});
    var counter = 0;
    
    
    for(var i = arr[0]; i <= arr[arr.length-1]; i++){
      counter += i;
    }
    
    return counter;
  }
  
  sumAll([1, 4]);
