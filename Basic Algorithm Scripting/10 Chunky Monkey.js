/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()
*/

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    var tArr = [];
    for (i = 0; i < arr.length; i++) {
        if (i % size !== size - 1)
            tArr.push(arr[i]);
        else {
            tArr.push(arr[i]);
            newArr.push(tArr);
            tArr = [];
        }
    }
    if (tArr.length !== 0)
        newArr.push(tArr);


    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
