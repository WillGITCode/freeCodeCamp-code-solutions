/*
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.pow()
*/

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var copy = arr;
    var newObj = [];

    function kepler(alt) {
        var orbPer = Math.round((2 * 3.1415926) * Math.sqrt(Math.pow(earthRadius + alt, 3) / GM));
        return orbPer;
    }

    for (var i in copy) {
        copy[i].orbitalPeriod = kepler(copy[i].avgAlt);
        delete copy[i].avgAlt;
        newObj.push(copy[i]);
    }

    return newObj;
}

orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);
