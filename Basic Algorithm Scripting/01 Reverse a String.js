 /*
   Reverse the provided string.

  You may need to turn the string into an array before you can reverse it.

  Your result must be a string.

  Remember to use Read-Search-Ask if you get stuck. Write your own code.

  Here are some helpful links:

  Global String Object
  String.prototype.split()
  Array.prototype.reverse()
  Array.prototype.join()
  */

 function reverseString(str) {
     var arr = str.split("");
     arr.reverse();
     var newStr = "";

     for (var i = 0; i < arr.length; i++) {
         newStr += arr[i];
     }

     return newStr;
 }

 reverseString("hello");
