
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

const hardCards = ['cow', 'dog', 'gecko', 'kingfisher', 'giraffe', 'lion', 'panda', 'eagle', 'tiger', 'zebra'];
const hardPairs = [...hardCards, ...hardCards];
const mediumCards = ['cow', 'dog', 'gecko', 'kingfisher', 'giraffe', 'lion', 'panda', 'eagle'];
const mediumPairs = [...mediumCards,...mediumCards];
const easyCards = ['giraffe', 'lion', 'panda', 'eagle', 'tiger', 'zebra'];
const easyPairs = [...easyCards,...easyCards];
var cardsNum;


var openedCards = [];
var maxPairs;
let score = document.getElementById('score');
let numMatch;
let moves = 0;



function handleClick(){
    
    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", function(){
        if (card.classList.contains('show')){
                return;
        }
            
        card.classList.add('show', 'animated', 'flipInY');

        let openCard = card.innerHTML;
        openedCards.push(openCard);
        console.log(openedCards);
        
        if (openedCards.length > 1){
            if (openCard === openedCards[0]) {
                match();
            } else {
                unMatched();
            }
        };
        stopGame();
        });
    });
}

function startGame() {
    numMatch = 0;
    moves = 0;
    resetTimer();
    addTime();
    showEasy();
    changeDifficulty(); 
};

function stopGame() {
    if(numMatch === maxPairs) {
        stopTimer();
        congratsMessage();
        changeScoreText();
    }
}

function congratsMessage() {
    document.getElementById('myModal').style.display = 'block';
    document.querySelector('#congrats-div').innerHTML = 

        `
        <h2>Congratulations!</h2>
        <h3>You completed the game in <span>${timerSpan.textContent}.<br>
        <h4><span id="result"></span></h4><br><i class="fas fa-thumbs-up"></i></span></h3><br>
        <button id="close-modal">Try Again!</button>

        `;

    let closeButton = document.querySelector('#close-modal');
    closeButton.addEventListener('click', function() {
        document.getElementById('myModal').style.display = 'none';
        startGame();
        })

}

function match() {
    moves++
    numMatch++;
    openedCards = [];
    increaseScore();
  
    document.querySelectorAll(".show").forEach((matchedCard) => {
      matchedCard.classList.add('match','animated','flipInX')
      matchedCard.classList.remove('show')
    });
  
  };
  

function unMatched() {
    moves++
    openedCards = [];
  
    document.querySelectorAll(".show:not(.match)").forEach((unmatchedCard) => {
      unmatchedCard.classList = 'card show unmatch animated shake';
      document.querySelectorAll('.unmatch').forEach((unmatchedCard) => {
        setTimeout(function() {
          unmatchedCard.classList = 'card';
        }, 900);
      })
    });
  };

function showEasy(){
    maxPairs = easyCards.length;
    document.querySelector('#deck').innerHTML = '';
    document.querySelector('#deck').classList.add('narrow', 'easy-deck');
    document.querySelector('#deck').classList.remove('hard-deck');
    shuffle(easyPairs);
        for (let a=0; a<easyPairs.length; a++){
            document.querySelector('.deck').innerHTML += `<li class="card"><img src="assets/images/${easyPairs[a]}.jpg"/></li>`;
    };
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`
    handleClick();
}

function showMedium(){
    maxPairs = mediumCards.length;
    document.querySelector('#deck').innerHTML = '';
    document.querySelector('#deck').classList.add('narrow', 'easy-deck');
    document.querySelector('#deck').classList.remove('hard-deck');
    shuffle(mediumPairs);
        for (let a=0; a<mediumPairs.length; a++){
            document.querySelector('.deck').innerHTML += `<li class="card"><img src="assets/images/${mediumPairs[a]}.jpg"/></li>`;
    };
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`
    handleClick();
}

function showHard(){
    maxPairs = hardCards.length;
    document.querySelector('#deck').innerHTML = '';
    document.querySelector('#deck').classList.add('narrow', 'hard-deck');
    shuffle(hardPairs);
        for (let a=0; a<hardPairs.length; a++){
            document.querySelector('.deck').innerHTML += `<li class="card"><img src="assets/images/${hardPairs[a]}.jpg"/></li>`;
    };
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`
    handleClick();
}


function changeDifficulty() {
   level = this.id;

   if (level == "diff-easy"){
        showEasy();
    
   } else if (level == "diff-medium"){
       showMedium();
     
   } else if (level == "diff-hard"){
       showHard();
       maxPairs = hardCards.length;
   }
}

const resetBtn = document.getElementById("reset-game").addEventListener('click', resetGame);

function resetGame() {
    resetTimer();
    startGame();
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


function increaseScore() {
        score.innerHTML = `Pairs ${numMatch}/${maxPairs}`    
}

function changeScoreText() {
    let result = document.querySelector('#result');
    if (moves <= 15){
        result.innerHTML = 'Your result was EXCELLENT!';
    } else if (moves > 15 && moves < 25){
      result.innerHTML = 'Well Done! Keep practicing to improve your score';
    } else {
       result.innerHTML = 'Good, but see if you can do it in less moves next time!';
    }
}



/* Timer variables */
var timerSpan = document.getElementById("timer"),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0,
    t;

function addTime() {
    clearTimeout(t);
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