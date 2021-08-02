
document.addEventListener("DOMContentLoaded", startGame);

const diffButtons = document.getElementsByClassName("diff-btn");

for (let i = 0; i < diffButtons.length; i++) {
    diffButtons[i].addEventListener("click", changeDifficulty); // Add an onclick to select the level
}


const easyClass = document.getElementsByClassName("easy");
const mediumClass = document.getElementsByClassName("medium");
const hardClass = document.getElementsByClassName("hard");
const hardLevel = [...mediumClass, ...hardClass, ...easyClass];
const deck = document.getElementById("deck");
let animalCards = document.getElementsByClassName("card");
var imagesList;
var imagesAry = [];

for (let i=0; i<animalCards.length; i++){
    imagesList = animalCards[i].innerHTML;
    imagesAry = imagesList.split(">", 30);
    console.log(imagesAry);
}


function startGame() {
    document.querySelector('.card').innerHTML = '';
    addTime();
    showEasy();
    shuffle(imagesList);
    document.querySelector('.card').innerHTML = imagesList;
    
}

function showEasy(){
    for (let i = 0; i < mediumClass.length; i++){
        let mediumLi = mediumClass[i];
        mediumLi.style.display = "none";
    }
    for (let i = 0; i < hardClass.length; i++){
        let hardLi = hardClass[i];   
        hardLi.style.display = "none" 
    }
    deck.style.width = "500px";
}

function showMedium(){
    for (let i = 0; i < hardClass.length; i++){
        let hardLi = hardClass[i];   
        hardLi.style.display = "none"
    }
    for (let i = 0; i < mediumClass.length; i++){
        let mediumLi = mediumClass[i];
        mediumLi.style.display = "flex";
    }
    deck.style.width = "600px"
}

function showHard(){
    for (let i = 0; i < hardLevel.length; i++){
        let toughLi = hardLevel[i];
        toughLi.style.display = "flex";
    }
    deck.style.width = "760px";
}


function changeDifficulty() {
   level = this.id;

   if (level == "diff-easy"){
        showEasy();
   } else if (level == "diff-medium"){
       showMedium();
   } else if (level == "diff-hard"){
       showHard();
   }
}

const resetBtn = document.getElementById("reset-game").addEventListener('click', resetGame);

function resetGame() {
    resetTimer();
    console.log("reset");
}


// ============================================
// Shuffle
// source: http://stackoverflow.com/a/2450976
// ============================================

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function mixCards() {}

function checkmatch() {}

function increaseScore() {}

function changeScoreColor() {}


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
    
    timerSpan.innerHTML = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " Minutes " + (seconds > 9 ? seconds : "0" + seconds) + " Seconds";
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