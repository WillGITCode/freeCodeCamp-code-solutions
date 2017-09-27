window.onload = function() {
    var currentDigit, result;
    var numHistory = [];
    var opHistory = [];
    var opInProgress = false;
    var maxDigit = 0;
    var AC = document.getElementById("allClear"); //works
    var CE = document.getElementById("clearEntry"); //works
    var decimal = document.getElementById("decimal");
    var equals = document.getElementById("equals");
    var lcd = document.getElementById("lcd");

    //Clearing on page load
    function clearNum() {
        if (lcd !== 0) {
            document.getElementById("lcd").innerHTML = 0;
        }
    }
    clearNum();

    //All Clear
    AC.addEventListener("click", function() {
        document.getElementById("lcd").innerHTML = "0";
        maxDigit = 0;
        numHistory = [];
        opHistory = [];
    });

    //Clear Entry
    CE.addEventListener("click", function() {
        document.getElementById("lcd").innerHTML = "0";
        maxDigit = 0;
    });

    //Decimal
    decimal.addEventListener("click", function() {
        if (opInProgress === true) {
            document.getElementById("lcd").innerHTML = ".";
        } else {
            document.getElementById("lcd").innerHTML += ".";
        }
    });

    //operator node
    var operators = document.querySelectorAll(".op");
    //operators
    for (var j = 0; j < operators.length; j++) {
        operators[j].addEventListener("click", function() {
            numHistory.push(parseFloat(document.getElementById("lcd").innerHTML));
            opHistory.push(this.innerHTML);
            opInProgress = true;
            maxDigit = 0;
        });
    }

    //number button node
    var numButtons = document.querySelectorAll(".numButton");
    //number button functions
    for (var i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener("click", function() {
            currentDigit = this.value;
            if (opInProgress === true) {
                clearNum();
                opInProgress = false;
                document.getElementById("lcd").innerHTML = currentDigit;
            } else if (
                document.getElementById("lcd").innerHTML === "0" &&
                opInProgress !== true
            ) {
                document.getElementById("lcd").innerHTML = currentDigit;
            } else {
                document.getElementById("lcd").innerHTML += currentDigit;
            }
            maxDigit++;

            if (maxDigit > 12) {
                document.getElementById("lcd").innerHTML = "Too many";
            }
        });
    }

    //Operations
    function plus(x, y) {
        return x + y;
    }

    function minus(x, y) {
        return x - y;
    }

    function multiply(x, y) {
        return x * y;
    }

    function division(x, y) {
        return x / y;
    }

    function percent(x, y) {
        return x / y * 100;
    }

    //Equals function
    equals.addEventListener("click", function() {
        numHistory.push(parseFloat(document.getElementById("lcd").innerHTML));
        var History = opHistory.length;
        for (var k = 0; k < History; k++) {
            switch (opHistory[k]) {
                case "+":
                    numHistory[k + 1] = plus(numHistory[k], numHistory[k + 1]);
                    break;

                case "-":
                    numHistory[k + 1] = minus(numHistory[k], numHistory[k + 1]);
                    break;

                case "X":
                    numHistory[k + 1] = multiply(numHistory[k], numHistory[k + 1]);
                    break;

                case "/":
                    numHistory[k + 1] = division(numHistory[k], numHistory[k + 1]);
                    break;

                case "%":
                    numHistory[k + 1] = percent(numHistory[k], numHistory[k + 1]);
                    break;
            }
        }
        document.getElementById("lcd").innerHTML = Math.round(numHistory[numHistory.length - 1] * 100) / 100;
        opInProgress = false;
        maxDigit = 0;
        numHistory = [];
        opHistory = [];
    });

    //end of function
};
