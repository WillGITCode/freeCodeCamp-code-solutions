/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()
*/

function myReplace(str, before, after) {
    var searRep;
    var replaceCase = str.search(before);
    if (str[replaceCase] == str[replaceCase].toLowerCase()) {
        searRep = str.replace(before, after);
    } else {
        var afterCase = after.charAt(0).toUpperCase() + after.slice(1);
        searRep = str.replace(before, afterCase);
    }

    return searRep;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
