/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.shift()
Array.prototype.slice()
*/

function dropElements(arr, func) {
    // Drop them elements.
    function dropFirst(arr) {
        arr.shift();
        return arr;
    }

    var funcTrue = false;

    do {
        if (func(arr[0]) === true) {
            funcTrue = true;
        } else {
            dropFirst(arr);
        }
    } while (funcTrue === false);

    return arr;
}

dropElements([0, 1, 0, 1], function(n) { return n === 1; });
