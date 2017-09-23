/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/

function bouncer(arr) {
    var tempArr = [];
    tempArr = arr.filter(falsy);

    return tempArr;
}

function falsy(value) {
    return Boolean(value);
}

bouncer([7, "ate", "", false, 9]);
