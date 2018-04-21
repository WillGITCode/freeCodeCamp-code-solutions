/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
*/

function destroyer(arr) {
    // Remove all the values
    var farr = Array.prototype.slice.call(arguments);
    farr.splice(0, 1);
    blank = [];

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < farr.length; j++) {
            if (arr[i] == farr[j]) {
                delete arr[i];
            }
        }
    }
    blank = arr.filter(remarg);
    return blank;
}

function remarg(value) {
    return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// easier to read, but not much better

function destroyer(arr) {
  
    var args = [].slice.call(arguments);
    var itemsToDelete = args.slice(1);
    
    
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < itemsToDelete.length; j++){
        if(arr[i] === itemsToDelete[j]){
          arr[i] = null;
        }
      }
    }
    
    
    return arr.filter(function(el){
      return el !== null;
    });
  }
  
  destroyer([2, 3, 2, 3], 2, 3);
