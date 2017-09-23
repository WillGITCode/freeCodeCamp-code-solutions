/*
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
*/

function steamrollArray(arr) {
    // I'm a steamroller, baby
    var newArr = [];

    function checkIsArray(x) {
        if (Array.isArray(x) === true) {
            for (var j = 0; j < x.length; j++) {
                checkIsArray(x[j]);
            }
        } else {
            newArr.push(x);
        }
    }

    for (var i = 0; i < arr.length; i++) {
        checkIsArray(arr[i]);
    }
    return newArr;
}

steamrollArray([1, [],
    [3, [
        [4]
    ]]
]);
