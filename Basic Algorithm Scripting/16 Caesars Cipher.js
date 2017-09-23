Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

function rot13(str) { // LBH QVQ VG!
    var arrStr = str.split("");
    var answer = [];
    var alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

    for (var i = 0; i < arrStr.length; i++) {
        if (alph.indexOf(arrStr[i]) == -1) {
            answer.push(arrStr[i]);
        } else {
            for (var j = 0; j < alph.length; j++) {
                if (arrStr[i] == alph[j]) {
                    answer.push(alph[j + 13]);
                }
            }
        }
    }
    return answer.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
