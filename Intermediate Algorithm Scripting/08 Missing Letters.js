/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
    var firstCharCode = str.charCodeAt(0);
    var lastCharCode = str.charCodeAt(str.length - 1);
    var count = firstCharCode;
    var missingCharCode;

    for (var i = 0; i < str.length; i++) {
        if (count !== str.charCodeAt(i)) {
            missingCharCode = str.charCodeAt(i) - 1;
            return String.fromCharCode(missingCharCode);
        }
        count++;
    }

    return undefined;
}

fearNotLetter("abce");
