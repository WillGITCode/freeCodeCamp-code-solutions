/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/

function bouncer(arr) {
    
    function isTrue(item){
        if(item){
          return item;
        }
      }
      
      return arr.filter(isTrue);

bouncer([7, "ate", "", false, 9]);
