/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

function translatePigLatin(str) {
    var vowels = ["a", "e", "i", "o", "u", "y"];
    var newStr;
    var firstVow;

    for (var i in vowels) {
        if (str.charAt(0) == vowels[i]) {
            newStr = str.concat("", "way");
            return newStr;
        }
    }

    for (var j = 0; j < str.length; j++) {
        vow = str.charAt(j);
        if (vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u" || vow == "y") {
            firstVow = str.indexOf(str.charAt(j));
            break;
        }
    }

    newStr = str.slice(firstVow).concat(str.slice(0, firstVow), "ay");

    return newStr;
}

translatePigLatin("glove");
