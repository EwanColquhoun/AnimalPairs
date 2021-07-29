
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "reset-game") {
                resetGame();
            } else if (this.getAttribute("class") === "diff-btn") {
                changeDifficulty();
            } else {
                alert("Error! Button function not known.");
            }
        })
    }
    startGame();
})

function startGame() {
    addTime();
}

function mixCards() {}

function checkmatch() {}

function increaseScore() {}

function changeScoreColor() {}

function changeDifficulty() {
    let buttons = document.getElementsByClassName("diff-btn");
    let diffButton = "";

    for (let button of buttons) {
        let diffButton = button.id;

        if (diffButton == "diff-easy"){
            console.log("easy button");
            
        } else if (diffButton == "diff-medium"){
            console.log("medium button");
            
        } else if (diffButton == "diff-hard"){
            console.log("hard button");
            
        }
    }
}


function resetGame() {
    resetTimer();
    console.log("reset");
}

function congratsMessage() {}

/* Timer variables */
var timerSpan = document.getElementById("timer"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0,
    t;

function addTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        }
    
    timerSpan.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " Minutes " + (seconds > 9 ? seconds : "0" + seconds) + " Seconds";
    timer();
}

function stopTimer() {
    clearTimeout(t);
}

function resetTimer() {
    seconds = 0;
    minutes = 0;
    timerSpan.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " Minutes " + (seconds > 9 ? seconds : "0" + seconds) + " Seconds";
}

function timer() {
    t = setTimeout(addTime, 1000);
}

/* Stop button 
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button 
clear.onclick = function() {
    timerSpan.textContent = "0 Minutes 0 Seconds";
    seconds = 0; minutes = 0;
}*/