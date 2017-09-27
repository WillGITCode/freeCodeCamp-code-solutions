window.onload = function() {
    var board;
    var move = "ai";
    var huPlayer = "X";
    var aiPlayer = "O";
    var PlayOButton = document.getElementById("PlayerO");
    var PlayXButton = document.getElementById("PlayerX");
    var firstMoves = [0, 2, 6, 8];
    var aiMoves = [];
    var moveFlag;
    var space;
    var boardButtons;

    //clears board
    function newBoard() {
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        moveFlag = "";
        move = "ai";
        aiMoves = [];
        window.setTimeout(function() {
            main(huPlayer, aiPlayer);
        }, 200);
        for (var k = 0; k < boardButtons.length; k++) {
            boardButtons[k].innerHTML = "0";
            boardButtons[k].style.color = "firebrick";
        }
    }

    function drawBoard(board) {
        for (var l = 0; l < board.length; l++) {
            boardButtons[l].innerHTML = board[l];
            if (board[l] == "X" || board[l] == "O") {
                boardButtons[l].style.color = "black";
            }
        }
    }

    //returns an array with availible spaces
    function freeSpaces(board) {
        return board.filter(i => i == 0);
    }

    //takes current player and current board state and checks against
    //possible win state for current player   returns bool
    function winState(board, player) {
        if (
            (board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)
        ) {
            return true;
        } else {
            return false;
        }
    }

    function winStateEval() {
        space = freeSpaces(board);
        if (winState(board, huPlayer) == true) {
            alert("You Won!");
            window.setTimeout(function() {
                newBoard();
            }, 300);
        } else if (winState(board, aiPlayer) == true) {
            alert("You Lost!");
            window.setTimeout(function() {
                newBoard();
            }, 300);
        } else if (space.length == 0) {
            alert("Tie!");
            window.setTimeout(function() {
                newBoard();
            }, 300);
        }
    }

    function main(huPlayer, aiPlayer) {
        winStateEval();
        //if fresh board play best move possible
        if (
            move == "ai" &&
            board.indexOf(huPlayer) == -1 &&
            board.indexOf(aiPlayer) == -1
        ) {
            var randMove = firstMoves[Math.floor(Math.random() * 4)];
            aiMoves.push(randMove);
            board[randMove] = aiPlayer;
            drawBoard(board);
        } else if (space.length == 7 && board[4] == huPlayer) {
            //if player plays middle
            switch (board.indexOf(aiPlayer)) {
                case 0:
                    aiMoves.push(8);
                    board[8] = aiPlayer;
                    drawBoard(board);
                    break;
                case 8:
                    aiMoves.push(0);
                    board[0] = aiPlayer;
                    drawBoard(board);
                    break;
                case 2:
                    aiMoves.push(6);
                    board[6] = aiPlayer;
                    drawBoard(board);
                    break;
                case 6:
                    aiMoves.push(2);
                    board[2] = aiPlayer;
                    drawBoard(board);
                    break;
            }
        } else if (moveFlag == "unbeatable cross") {
            //unbeatable cross
            for (var p = 0; p < firstMoves.length; p++) {
                if (board[firstMoves[p]] !== huPlayer) {
                    aiMoves.push(firstMoves[p]);
                    board[firstMoves[p]] = aiPlayer;
                    drawBoard(board);
                }
            }
            moveFlag = "";
            window.setTimeout(function() {
                main(huPlayer, aiPlayer);
            }, 750);
        } else if (moveFlag == "set for the middle") {
            //continue set for the middle
            switch (aiMoves[1]) {
                case 0:
                    if (board[6] == aiPlayer && board[3] !== huPlayer) {
                        aiMoves.push(3);
                        board[3] = aiPlayer;
                        drawBoard(board);
                        window.setTimeout(function() {
                            main(huPlayer, aiPlayer);
                        }, 750);
                    } else if (board[6] == aiPlayer && board[3] == huPlayer) {
                        aiMoves.push(4);
                        board[4] = aiPlayer;
                        drawBoard(board);
                    } else if (board[2] == aiPlayer && board[1] !== huPlayer) {
                        aiMoves.push(1);
                        board[1] = aiPlayer;
                        drawBoard(board);
                        window.setTimeout(function() {
                            main(huPlayer, aiPlayer);
                        }, 750);
                    } else if (board[2] == aiPlayer && board[1] == huPlayer) {
                        aiMoves.push(4);
                        board[4] = aiPlayer;
                        drawBoard(board);
                    }
                    break;
                case 2:
                    if (board[8] == aiPlayer && board[5] !== huPlayer) {
                        aiMoves.push(5);
                        board[5] = aiPlayer;
                        drawBoard(board);
                        window.setTimeout(function() {
                            main(huPlayer, aiPlayer);
                        }, 750);
                    } else if (board[8] == aiPlayer && board[5] == huPlayer) {
                        aiMoves.push(4);
                        board[4] = aiPlayer;
                        drawBoard(board);
                    } else if (board[0] == aiPlayer && board[1] !== huPlayer) {
                        aiMoves.push(1);
                        board[1] = aiPlayer;
                        drawBoard(board);
                        window.setTimeout(function() {
                            main(huPlayer, aiPlayer);
                        }, 750);
                    } else if (board[0] == aiPlayer && board[1] == huPlayer) {
                        aiMoves.push(4);
                        board[4] = aiPlayer;
                        drawBoard(board);
                    }
                    break;
                case 8:
                    if (board[6] == aiPlayer && board[7] !== huPlayer) {
                        aiMoves.push(7);
                        board[7] = aiPlayer;
                        drawBoard(board);
                        window.setTimeout(function() {
                            main(huPlayer, aiPlayer);
                        }, 750);
                    } else if (board[6] == aiPlayer && board[7] == huPlayer) {
                        aiMoves.push(4);
                        board[4] = aiPlayer;
                        drawBoard(board);
                    } else if (board[2] == aiPlayer && board[5] !== huPlayer) {
                        aiMoves.push(5);
                        board[5] = aiPlayer;
                        drawBoard(board);
                        window.setTimeout(function() {
                            main(huPlayer, aiPlayer);
                        }, 750);
                    } else if (board[2] == aiPlayer && board[5] == huPlayer) {
                        aiMoves.push(4);
                        board[4] = aiPlayer;
                        drawBoard(board);
                    }
                    break;
                case 6:
                    if (board[8] == aiPlayer && board[7] !== huPlayer) {
                        aiMoves.push(7);
                        board[7] = aiPlayer;
                        drawBoard(board);
                        window.setTimeout(function() {
                            main(huPlayer, aiPlayer);
                        }, 750);
                    } else if (board[8] == aiPlayer && board[7] == huPlayer) {
                        aiMoves.push(4);
                        board[4] = aiPlayer;
                        drawBoard(board);
                    } else if (board[0] == aiPlayer && board[3] !== huPlayer) {
                        aiMoves.push(3);
                        board[3] = aiPlayer;
                        drawBoard(board);
                        window.setTimeout(function() {
                            main(huPlayer, aiPlayer);
                        }, 750);
                    } else if (board[0] == aiPlayer && board[3] == huPlayer) {
                        aiMoves.push(4);
                        board[4] = aiPlayer;
                        drawBoard(board);
                    }
                    break;
            }
            moveFlag = "unbeatable cross";
        } else if (space.length == 7 && board.indexOf(huPlayer) !== 4) {
            //if player doesnt take middle
            switch (board.indexOf(aiPlayer)) {
                case 0:
                    if (board.indexOf(huPlayer) !== 6 && board.indexOf(huPlayer) !== 3) {
                        aiMoves.push(6);
                        board[6] = aiPlayer;
                        drawBoard(board);
                    } else {
                        aiMoves.push(2);
                        board[2] = aiPlayer;
                        drawBoard(board);
                    }
                    break;
                case 8:
                    if (board.indexOf(huPlayer) !== 2 && board.indexOf(huPlayer) !== 5) {
                        aiMoves.push(2);
                        board[2] = aiPlayer;
                        drawBoard(board);
                    } else {
                        aiMoves.push(6);
                        board[6] = aiPlayer;
                        drawBoard(board);
                    }
                    break;
                case 2:
                    if (board.indexOf(huPlayer) !== 0 && board.indexOf(huPlayer) !== 1) {
                        aiMoves.push(0);
                        board[0] = aiPlayer;
                        drawBoard(board);
                    } else {
                        aiMoves.push(8);
                        board[8] = aiPlayer;
                        drawBoard(board);
                    }
                    break;
                case 6:
                    if (board.indexOf(huPlayer) !== 8 && board.indexOf(huPlayer) !== 7) {
                        aiMoves.push(8);
                        board[8] = aiPlayer;
                        drawBoard(board);
                    } else {
                        aiMoves.push(0);
                        board[0] = aiPlayer;
                        drawBoard(board);
                    }
                    break;
            }
            moveFlag = "set for the middle";
        } else if (moveFlag == "go for the kill") {
            //exploit mistake of huPlayer not taking middle
            if (
                aiMoves.indexOf(0) !== -1 &&
                aiMoves.indexOf(2) !== -1 &&
                board[1] !== huPlayer
            ) {
                aiMoves.push(1);
                board[1] = aiPlayer;
                drawBoard(board);
            } else if (
                aiMoves.indexOf(0) !== -1 &&
                aiMoves.indexOf(6) !== -1 &&
                board[3] !== huPlayer
            ) {
                aiMoves.push(3);
                board[3] = aiPlayer;
                drawBoard(board);
            } else if (
                aiMoves.indexOf(6) !== -1 &&
                aiMoves.indexOf(8) !== -1 &&
                board[7] !== huPlayer
            ) {
                aiMoves.push(7);
                board[7] = aiPlayer;
                drawBoard(board);
            } else if (
                aiMoves.indexOf(2) !== -1 &&
                aiMoves.indexOf(8) !== -1 &&
                board[5] !== huPlayer
            ) {
                aiMoves.push(5);
                board[5] = aiPlayer;
                drawBoard(board);
            }
            moveFlag = "";
            window.setTimeout(function() {
                main(huPlayer, aiPlayer);
            }, 750);
        } else if (
            space.length == 5 &&
            board[4] == huPlayer &&
            (board[0] == huPlayer ||
                board[2] == huPlayer ||
                board[6] == huPlayer ||
                board[8] == huPlayer)
        ) {
            //if player doesnt follow up middle move correctly
            for (var m = 0; m < firstMoves.length; m++) {
                if (
                    board[firstMoves[m]] !== huPlayer &&
                    board[firstMoves[m]] !== aiPlayer
                ) {
                    board[firstMoves[m]] = aiPlayer;
                    aiMoves.push(firstMoves[m]);
                    moveFlag = "go for the kill";
                    drawBoard(board);
                }
            }
        } else if (freeSpaces(board).length < 7 && moveFlag == "") {
            //random move
            for (var q = 0; q < board.length; q++) {
                if (board[q] == 0) {
                    aiMoves.push(q);
                    board[q] = aiPlayer;
                    drawBoard(board);
                    break;
                }
            }
            window.setTimeout(function() {
                winStateEval();
            }, 300);
        }
        move = "hu";
        if (freeSpaces(board).length == 0) {
            window.setTimeout(function() {
                winStateEval();
            }, 300);
        }
    } //end of main

    //board node
    boardButtons = document.querySelectorAll(".board-square");
    for (var j = 0; j < boardButtons.length; j++) {
        boardButtons[j].addEventListener("click", function(j) {
            if (this.innerHTML == "0") {
                board[this.id] = huPlayer;
                this.innerHTML = huPlayer;
                this.style.color = "black";
                move = "ai";
                window.setTimeout(function() {
                    main(huPlayer, aiPlayer);
                }, 200);
            }
        });
    }

    //chose player symbol
    function chosePlayer(button) {
        if (button == "PlayerX") {
            huPlayer = "X";
            aiPlayer = "O";
            newBoard();
            window.setTimeout(function() {
                main(huPlayer, aiPlayer);
            }, 200);
        } else if (button == "PlayerO") {
            huPlayer = "O";
            aiPlayer = "X";
            newBoard();
            window.setTimeout(function() {
                main(huPlayer, aiPlayer);
            }, 200);
        }
    }

    PlayXButton.addEventListener("click", function() {
        document.getElementById("clickBlocker").style.visibility = "visible";
        chosePlayer("PlayerX");
    });

    PlayOButton.addEventListener("click", function() {
        document.getElementById("clickBlocker").style.visibility = "visible";
        chosePlayer("PlayerO");
    });

    newBoard();

    //end
};
