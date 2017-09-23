/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.filter()
*/

function findElement(arr, func) {
    var num;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    for (var j = newArr.length; j > 0; j--) {
        if (newArr[j] % 2 === 0) {
            num = newArr[j];
        }

    }
    return num;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
