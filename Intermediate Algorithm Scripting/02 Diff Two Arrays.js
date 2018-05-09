/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
*/

function diffArray(arr1, arr2) {
    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    for (var k = 0; k < arr2.length; k++) {
        if (arr1.indexOf(arr2[k]) === -1) {
            newArr.push(arr2[k]);
        }
    }

    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);


//Second attempt
function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    var diffArr = [];
    
    for(var i = 0; i < newArr.length; i++){
      if(newArr.indexOf(newArr[i]) == newArr.lastIndexOf(newArr[i])){
         diffArr.push(newArr[i]);
       }
    }
    
    return diffArr;
  }
  
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
