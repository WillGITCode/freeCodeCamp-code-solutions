/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
*/

function convertToRoman(num) {
    var romanArr = [
        [1, 'I'],
        [4, 'IV'],
        [5, 'V'],
        [9, 'IX'],
        [10, 'X'],
        [40, 'XL'],
        [50, 'L'],
        [90, 'XC'],
        [100, 'C'],
        [400, 'CD'],
        [500, 'D'],
        [900, 'CM'],
        [1000, 'M']
    ];

    var placeHolder = [];

    for (var i = 12; i >= 0; i--) {
        if (num >= romanArr[i][0]) {
            placeHolder.push(romanArr[i][1]);
            num = num - romanArr[i][0];
            i++;
        }
    }

    return placeHolder.join("");
}

convertToRoman(2);
