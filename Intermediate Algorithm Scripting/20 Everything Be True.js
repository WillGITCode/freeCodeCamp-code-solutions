/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function truthCheck(collection, pre) {
    // Is everyone being true?
    var tru;

    function truth(x) {
        var theCount = 0;
        for (var i in x) {
            //Tricky part. hasOnProperty evals the objects property while
            //Boolean compares the propertys value to Pre expressed as (is x[i] === pre)?
            if (x[i].hasOwnProperty(pre) && Boolean(x[i][pre])) {
                theCount++;
            }
        }
        if (theCount === x.length) {
            tru = true;
        } else { tru = false; }
    }

    truth(collection);

    return tru;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, 
            { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
