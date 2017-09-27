$(function() {
    var soundSequence = [];
    var windowLoad = 0;
    var index = 0;
    var level = 1;
    var repeats = 1;
    var strict = 0;
    var timeToTry = 2000;
    var timeToListen = 1000;
    var playerAttempts = [];
    var countDown;
    var tempTime;
    var yellow = document.getElementById("1Aud");
    var red = document.getElementById("2Aud");
    var blue = document.getElementById("3Aud");
    var green = document.getElementById("4Aud");

    function initializeGame() {
        if (windowLoad == 1) {
            yellow.play();
            red.play();
            blue.play();
            green.play();
        }
        if (strict == 0 && windowLoad == 1) {
            playerAttempts = [];
        } else {
            $("#LCD").html("");
            soundSequence = [];
            playerAttempts = [];
            index = 0;
            level = 1;
            repeats = 1;
            timeToListen = 1000;
            timeToTry = 2000;
            for (var i = 0; i < 20; i++) {
                soundSequence.push(Math.floor(Math.random() * 4) + 1);
            }
        }
        console.log("initialize");
    }

    function timeOut() {
        if (playerAttempts.length == level - 1) {
            $("#innerCircle").css("box-shadow", "0 0 5000px whitesmoke");
            setTimeout(function() {
                $("#innerCircle").css("box-shadow", "none");
            }, 500);
            console.log("timeout before next play level");
            playLevel();
        } else {
            initializeGame();
            index = 0;
            repeats = level - 1;
            $("#innerCircle").css("box-shadow", "0 0 5000px red");
            setTimeout(function() {
                $("#innerCircle").css("box-shadow", "none");
            }, 600);
            console.log("timeout before next playsounds and after initialize");
            setTimeout(playSounds, 1000);
        }
    }

    function timer() {
        countDown = setTimeout(timeOut, timeToTry);
    }

    function playSounds() {
        if (index > 19 || repeats < 1) {
            index = 0;
            timer();
            playerAttempts = [];
            console.log("playsounds over");
            return;
        }
        switch (soundSequence[index]) {
            case 1:
                yellow.play();
                divGlow("1", "red");
                setTimeout(function() {
                    yellow.currentTime = 0;
                }, 700);
                break;
            case 2:
                red.play();
                divGlow("2", "yellow");
                setTimeout(function() {
                    red.currentTime = 0;
                }, 700);
                break;
            case 3:
                blue.play();
                divGlow("3", "yellow");
                setTimeout(function() {
                    blue.currentTime = 0;
                }, 700);
                break;
            case 4:
                green.play();
                divGlow("4", "blue");
                setTimeout(function() {
                    green.currentTime = 0;
                }, 700);
                break;
        }
        index++;
        repeats--;
        setTimeout(playSounds, timeToListen);
    }

    function playLevel() {
        $("#LCD").html(level);
        index = 0;
        repeats = level;
        setTimeout(playSounds, 1000);
        level++;
        timeToListen -= 12;
        timeToTry += 900;
        console.log("playlevel");
    }

    function addPlayerAttempts(id) {
        playerAttempts.push(id);
        var buttonCheck = soundSequence.slice(0, level);
        for (var m = 0; m < playerAttempts.length; m++) {
            if (playerAttempts[m] !== buttonCheck[m]) {
                confirm("Whoops!");
                initializeGame();
                break;
            }
        }
        if (playerAttempts.length == 20) {
            if (strict == 0) {
                confirm("Congratulations You Won! Try Strict Mode");
                strict = 1;
                initializeGame();
            } else {
                confirm("Congratulations You Are The Best!");
                initializeGame();
            }
        }
    }

    function divGlow(id, color) {
        $("#innerCone" + id).css("box-shadow", "0 0 100px " + color);
        setTimeout(function() {
            $("#innerCone" + id).css("box-shadow", "none");
        }, 600);
    }

    $("#innerCone1").mousedown(function() {
        yellow.play();
        divGlow("1", "red");
        addPlayerAttempts(1);
    });
    $("#innerCone2").mousedown(function() {
        red.play();
        divGlow("2", "yellow");
        addPlayerAttempts(2);
    });
    $("#innerCone3").mousedown(function() {
        blue.play();
        divGlow("3", "yellow");
        addPlayerAttempts(3);
    });
    $("#innerCone4").mousedown(function() {
        green.play();
        divGlow("4", "blue");
        addPlayerAttempts(4);
    });

    $("#Start").click(function() {
        playLevel();
    });

    $("#Reset").click(function() {
        window.location.reload(true);
    });

    $("#Strict").click(function() {
        if (strict == 0) {
            strict = 1;
        } else {
            strict = 0;
        }
    });

    initializeGame();
    windowLoad = 1;
    //end
});
