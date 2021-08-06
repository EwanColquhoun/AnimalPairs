
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

const hardCards = ['cow', 'baboon', 'snake', 'kingfisher', 'dolphin', 'lion', 'polarBear', 'eagle', 'tiger', 'zebra'];
const hardPairs = [...hardCards, ...hardCards];
const mediumCards = ['cow', 'baboon', 'snake', 'kingfisher', 'dolphin', 'lion', 'polarBear', 'eagle'];
const mediumPairs = [...mediumCards,...mediumCards];
const easyCards = ['dolphin', 'lion', 'polarBear', 'eagle', 'tiger', 'zebra'];
const easyPairs = [...easyCards,...easyCards];
var cardsNum;


var openedCards = [];
var maxPairs;
let score = document.getElementById('score');
let numMatch;
let moves = 0;
var animalName;

for (var a=0; a<easyPairs.length; a++){
    easyAnimalName = easyPairs[a];
}

function welcomeMessage() {
    document.getElementById('welcome-modal-close-easy').addEventListener('click', function() {
        document.getElementById('welcome-modal-box').style.display = 'none';
        deckShufflePlay();
        startGame();
        showEasy();
    });

    document.getElementById('welcome-modal-close-medium').addEventListener('click', function() {
        document.getElementById('welcome-modal-box').style.display = 'none';
        deckShufflePlay();
        startGame();
        showMedium();
    });

    document.getElementById('welcome-modal-close-hard').addEventListener('click', function() {
        document.getElementById('welcome-modal-box').style.display = 'none';
        deckShufflePlay();
        startGame();
        showHard();    
    });
}


function handleClick(){
    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", function(){
            cardTurnOver();           
            addTime();
        if (card.classList.contains('show')){
                return;
        }
            
        card.classList.add('show', 'animated', 'flipInY');
        let openCard = card.innerHTML;
        openedCards.push(openCard);
        console.log(openedCards);
        var cardsNum = openedCards.toString(); 
        if (openedCards.length > 1){
            if (openCard === openedCards[0]) {
                match(); 
                checkDataMatch(cardsNum);
                var cardsNum = '';
            } else {
                wrongMatch();
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
    showEasy();
    welcomeMessage();
    resetTimer();
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
        <h3><span id="result"></span></h4><br><i class="fas fa-thumbs-up"></i></span></h3><br>
        <h2>Choose a difficulty to try again! <i class="fas fa-arrow-down"></i></h2>
        <button id="modal-close-easy" class="close-modal easy">Easy</button><button id="modal-close-medium" class="close-modal medium">Medium</button><button id="modal-close-hard" class="close-modal hard">Hard</button>

        `;

    
    document.getElementById('modal-close-easy').addEventListener('click', function() {
            document.getElementById('myModal').style.display = 'none';
            deckShufflePlay();
            startGame();
            showEasy();
    });

    document.getElementById('modal-close-medium').addEventListener('click', function() {
            document.getElementById('myModal').style.display = 'none';
            deckShufflePlay();
            startGame();
            showMedium();
    });

    document.getElementById('modal-close-hard').addEventListener('click', function() {
            document.getElementById('myModal').style.display = 'none';
            deckShufflePlay();
            startGame();
            showHard();    
    });
}

function match() {
    match.called = true;
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
    unMatched.called = true;
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
    document.querySelector('#deck').classList.add('easy-deck');
    document.querySelector('#deck').classList.remove('hard-deck');
    shuffle(easyPairs);
    for (var a=0; a<easyPairs.length; a++){
        document.querySelector('.deck').innerHTML += `<li class="card" data-ref="${easyPairs[a]}"><img src="assets/images/${easyPairs[a]}.jpg"/></li>`;
    };
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`
    handleClick();
}

function showMedium(){
    maxPairs = mediumCards.length;
    document.querySelector('#deck').innerHTML = '';
    document.querySelector('#deck').classList.add('easy-deck');
    document.querySelector('#deck').classList.remove('hard-deck');
    shuffle(mediumPairs);
        for (var a=0; a<mediumPairs.length; a++){
            document.querySelector('.deck').innerHTML += `<li class="card"><img src="assets/images/${mediumPairs[a]}.jpg"/></li>`;
    };
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`
    handleClick();
}

function showHard(){
    maxPairs = hardCards.length;
    document.querySelector('#deck').innerHTML = '';
    document.querySelector('#deck').classList.add('hard-deck');
    shuffle(hardPairs);
        for (var a=0; a<hardPairs.length; a++){
            document.querySelector('.deck').innerHTML += `<li class="card"><img src="assets/images/${hardPairs[a]}.jpg"/></li>`;
    };
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`
    handleClick();
}

function checkDataMatch(cardsNum){
    if(match){
        animalName = cardsNum.charAt(24)
        playAnimalSounds(animalName);
    } else {
        return;
    }
}

function changeDifficulty() {
   level = this.id;

   if (level == "diff-easy"){
    deckShufflePlay();
    showEasy();
    stopTimer();
    resetTimer();
        
   } else if (level == "diff-medium"){
    deckShufflePlay();
    showMedium();
    stopTimer();
    resetTimer();
     
   } else if (level == "diff-hard"){
    deckShufflePlay();
    showHard();
    stopTimer();
    resetTimer();
   }
}

const resetBtn = document.getElementById("reset-game").addEventListener('click', resetGame);

function resetGame() {
    stopTimer();
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

function timerFlash() {
    if (seconds >= 45) {
        timerSpan.classList.add('flash');
    }

    if (minutes >= 2) {
        timerSpan.classList.remove('flash');
        timerSpan.classList.add('long-flash');
    }
}

function addTime() {
    clearTimeout(t);
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        }
    
    timerSpan.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " Minutes " + (seconds > 9 ? seconds : "0" + seconds) + " Seconds";
    timer();
    timerFlash();
}

function stopTimer() {
    clearTimeout(t);
}

function resetTimer() {
    timerSpan.classList.remove('flash', 'long-flash');
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