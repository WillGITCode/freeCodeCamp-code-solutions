/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh 
delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be 
found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Array Object
*/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var found = 0;
    var itemsToAdd = [];

    if (arr2.length === 0) {
        return arr1;
    } else if (arr1.length === 0) {
        arr2.sort(sortFunc);
        return arr2;
    }

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[i][1] === arr1[j][1]) {
                found = 1;
                arr1[j][0] += arr2[i][0];
            }
        }
        if (found === 0 && arr2[i] !== null) {
            itemsToAdd.push(arr2[i]);
        }
        found = 0;
    }

    for (var k = 0; k < itemsToAdd.length; k++) {
        arr1.push(itemsToAdd[k]);
    }

    arr1.sort(sortFunc);


    function sortFunc(a, b) {
        if (a[1] === b[1]) {
            return 0;
        } else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }

    return arr1;
}

// Example inventory lists
var curInv = [];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
