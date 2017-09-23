/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Details of the Object Model
*/

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast.split(" ");

    this.setFullName = function(firstAndLast) {
        var newName = firstAndLast.split(" ");
        fullName[0] = newName[0];
        fullName[1] = newName[1];
    };

    this.getFullName = function() {
        return fullName[0] + " " + fullName[1];
    };

    this.getFirstName = function() {
        return fullName[0];
    };

    this.getLastName = function() {
        return fullName[1];
    };

    this.setFirstName = function(first) {
        fullName[0] = first;
    };

    this.setLastName = function(last) {
        fullName[1] = last;
    };

};

var bob = new Person('Bob Ross');
