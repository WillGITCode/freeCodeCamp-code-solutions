/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
*/

function findLongestWord(str) {
    var wrds = str.split(" ");

    var sorted = wrds.sort(function(a, b) {
        return a.length < b.length;
    });

    return sorted[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
