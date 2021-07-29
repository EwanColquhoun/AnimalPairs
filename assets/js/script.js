

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
        
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "reset-game") {
                resetGame();
            } else if (this.getAttribute("class") === "dropbtn") {
                changeDifficulty();
            } else {
                alert("Error! Button function not known.");
            }
        })
    }
    startGame()
})

function startGame() {
    add();
}

function mixCards() {}

function checkmatch() {}

function increaseScore() {}

function changeScoreColor() {}

function changeDifficulty() {
    console.log("Change Difficulty");
}

function resetGame() {
    console.log("Function works");
}

function congratsMessage() {}


let timerSpan = document.getElementById("timer"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        }
    
    timerSpan.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " Minutes " + (seconds > 9 ? seconds : "0" + seconds) + " Seconds";
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onload = timer();

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    timerSpan.textContent = "0 Minutes 0 Seconds";
    seconds = 0; minutes = 0;
}