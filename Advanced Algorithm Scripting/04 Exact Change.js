/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string 
"Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object
*/

function checkCashRegister(price, cash, cid) {
    if (cash < price) {
        return "not enough cash!";
    }
    var amounts = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    var change = cash - price;
    var changeArr = [];
    var placeHolder = 0;

    function round(num) {
        return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
    }


    for (var i = 8; i >= 0; i--) {
        if (change >= amounts[i] && cid[i][1] > 0) {
            while (cid[i][1] > 0 && change >= amounts[i]) {
                change -= amounts[i];
                change = round(change);
                placeHolder += amounts[i];
                placeHolder = round(placeHolder);
                cid[i][1] -= amounts[i];
                cid[i][1] = round(cid[i][1]);
            }
            changeArr.push([cid[i][0], placeHolder]);
            placeHolder = 0;
        }
    }

    if (change !== 0) {
        return "Insufficient Funds";
    }
    for (var j = 0; j < cid.length; j++) {
        placeHolder += cid[j][1];
    }
    if (placeHolder === 0) {
        return "Closed";
    }

    return changeArr;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]);
