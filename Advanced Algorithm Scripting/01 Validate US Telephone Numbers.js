/*
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 
or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on 
any combination of the formats provided above. The area code is required. If the country 
code is provided, you must confirm that the country code is 1. Return true if the string is a 
valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
*/

function telephoneCheck(str) {
    // Good luck!
    var arr = [];

    for (var i = 0; i < str.length; i++) {

        switch (/\(/.test(str) === true || /\)/.test(str) === true) {
            case str[0] === "(" && str[4] === ")":
                break;
            case str[1] === "(" && str[5] === ")":
                break;
            case str[2] === "(" && str[6] === ")":
                break;
            default:
                return false;
        }

        if (str.includes("?")) {
            return false;
        }

        if (/[0-9]/.test(str[i]) === true) {
            arr.push(str[i]);
        }
    }

    if (arr.length === 10) {
        return true;
    } else if (arr.length === 11 && arr[0] == 1) {
        return true;
    }
    return false;
}

telephoneCheck("1 (555) 555-5555");
