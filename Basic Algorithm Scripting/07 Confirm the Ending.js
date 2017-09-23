/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()
*/

function confirmEnding(str, target) {

    var lastCharIndex = str.length;
    var ls = str.length - target.length;
    var lastChar = str.substring(ls, lastCharIndex);
    if (lastChar == target) {
        return true;
    } else return false;
}

confirmEnding("Open sesame", "pen");