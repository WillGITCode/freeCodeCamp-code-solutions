/*
Create a function that takes two or more arrays and returns an array of the 
symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term 
"symmetric difference" of two sets is the set of elements which are in either of the two sets, 
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take 
(say on a set D = {2, 3}), you should get the set with elements which are in either of the two 
the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce()
Symmetric Difference
*/

function sym(args) {
    //get everything in an array
    var arr = [].slice.call(arguments);

    //create a callback function for reduce
    function symDiff(arr1, arr2) {
        var newArr = [];
        for (var i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) < 0 && newArr.indexOf(arr1[i]) < 0) {
                newArr.push(arr1[i]);
            }
        }

        for (var j = 0; j < arr2.length; j++) {
            if (arr1.indexOf(arr2[j]) < 0 && newArr.indexOf(arr2[j]) < 0) {
                newArr.push(arr2[j]);
            }
        }
        return newArr;
    }

    return arr.reduce(symDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
