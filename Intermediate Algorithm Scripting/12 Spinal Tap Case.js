/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()
*/

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var spaceStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    var newStr = spaceStr.replace(/ /g, "-").replace(/_/g, "-");
    var finaleStr = newStr.toLowerCase();
    return finaleStr;
}

spinalCase('thisIsSpinalTap');
