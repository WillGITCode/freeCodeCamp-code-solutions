/*
Return the number of total permutations of the provided string that don't have repeated 
consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp
*/

function permAlone(str) {
    if (str.length === 1) {
        return 1;
    }
    var arr = str.split("");
    var noRepeatPer = 0;
    //compact regex explain at http://crookedcode.com/tag/heaps-algorithm/
    var repeats = /([a-zA-Z])\1/;

    var heaps = function(n) {
        if (n === 1) {
            if (!(repeats).test(arr.join(""))) {
                noRepeatPer++;
            }
        } else {
            for (var i = 0; i != n; i++) {
                heaps(n - 1);
                //ternary operator i found at www.gorkahernandez.com/blog/no-repeats-please-free-code-camp 
                hotSwap(n % 2 ? 0 : i, n - 1);
            }
        }
    };

    function hotSwap(firstPos, lastPos) {
        var temp = arr[firstPos];
        arr[firstPos] = arr[lastPos];
        arr[lastPos] = temp;
    }

    heaps(arr.length);

    return noRepeatPer;
}

permAlone('aab');
