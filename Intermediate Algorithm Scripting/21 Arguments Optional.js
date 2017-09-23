/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object
*/

function addTogether() {

    if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1 && typeof arguments[0] === 'number') {
        var arg1 = arguments[0];
        return function(arg2) {
            if (arguments.length === 1 && typeof arguments[0] === 'number') {
                return arg1 + arg2;
            } else {
                return undefined;
            }

        };
    } else {
        return undefined;
    }
}

addTogether(2)([3]);
