window.onload = function() {
    var timer = document.getElementById("time");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var minutes = parseInt(document.getElementById("sessionL").innerHTML);
    var go;
    var secs = 0;
    var active = 0;
    var breakPeriod = 0;
    var breakTime = parseInt(document.getElementById("break").innerHTML);

    var minusB = document.getElementById("minusB");
    var plusB = document.getElementById("plusB");
    var minusS = document.getElementById("minusS");
    var plusS = document.getElementById("plusS");

    start.addEventListener("click", function() {
        if (!active) {
            active = 1;
            startTimer();
        }
    });

    stop.addEventListener("click", function() {
        if (active) {
            clearTimeout(go);
            active = 0;
        }
    });

    function startTimer() {
        if (breakPeriod === 0) {
            timer.innerHTML =
                minutes.toString() +
                ":" +
                (secs < 10 ? "0" : "") +
                String(secs);
        } else {
            timer.innerHTML =
                breakTime.toString() +
                ":" +
                (secs < 10 ? "0" : "") +
                String(secs);
        }
        if (secs < 1) {
            secs = 60;
            if (minutes === 0) {
                if (breakPeriod === 0) {
                    breakPeriod = 1;
                    document.getElementById("alert").play();
                    breakTime = parseInt(document.getElementById("break").innerHTML - 1);
                    document.getElementById("session").innerHTML = "Break!"
                } else {
                    document.getElementById("session").innerHTML = "Session"
                    breakPeriod = 0;
                }
            } else {
                minutes--;
            }
        }
        secs--;
        go = setTimeout(function() {
            startTimer();
        }, 1000);
    }

    minusB.addEventListener("click", function() {
        if (document.getElementById("break").innerHTML > 1) {
            breakTime--;
            document.getElementById("break").innerHTML = breakTime;
        }
    });

    plusB.addEventListener("click", function() {
        breakTime++;
        document.getElementById("break").innerHTML = breakTime;
    });

    minusS.addEventListener("click", function() {
        if (document.getElementById("sessionL").innerHTML > 1) {
            minutes--;
            document.getElementById("sessionL").innerHTML = minutes;
            timer.innerHTML = minutes.toString() + ":" + "00";
        }
    });

    plusS.addEventListener("click", function() {
        minutes++;
        document.getElementById("sessionL").innerHTML = minutes;
        timer.innerHTML = minutes.toString() + ":" + "00";
    });

    //end
};
