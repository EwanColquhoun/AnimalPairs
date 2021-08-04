
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

const cards = ['cow', 'dog', 'gecko', 'kingfisher', 'giraffe', 'lion', 'panda', 'eagle', 'tiger', 'zebra', ]
const animalPairs = [...cards, ...cards];
var openedCards = [];
const cardQuantity = animalPairs.length;
const maxPairs = cards.length;
let numMatch = 0

/*
let myAnimals = document.getElementById("deck");
for (let i=0; i<myAnimals.children.length; i++){
    animalsArray.push(myAnimals.children[i].innerHTML);
}
console.log(animalsArray)

// const images = document.querySelectorAll('#deck img');
// for (let i = 0; i < images.length; i++) {
//     images[i].src = i;
//     console.log(images[i]);
//     }

function shuffleCards() {
    // select #deck img
    let images = document.querySelectorAll('#deck img');

    // shuffle animalPairs array
    shuffle(animalPairs);

    // iterate over all images    
    for (let i = 0; i < images.length; i++) {
        // apply a src to the img
        images[i].src = `assets/images/${animalPairs[i]}.jpg`;
        // apply a data attribute that is the same as the index in the animalPairs array
        images[i].dataset.ref = animalPairs[i];
        // attach a click event listener to the image
        images[i].addEventListener('click', event => handleClick(event));
    };
}

function beginGame() {
      //gives the unopenedcards a click
      document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", event => handleClick(event));

        if (card.classList.contains('show')){
            return;
        }

        card.classList.add('show', 'flipInY', 'animated');
}
*/

function handleClick(){
    
    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", function(){

        if (card.classList.contains('show')){
                return;
        }
            
        card.classList.add('show', 'animate_animiated', 'animate_flipInY');

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
    document.querySelector('#deck').innerHTML = '';
    numMatch = 0
    resetTimer();
    addTime();
    shuffle(animalPairs);

    for (let a=0; a<cardQuantity; a++){
        document.querySelector('.deck').innerHTML += `<li class="card"><img src="assets/images/${animalPairs[a]}.jpg"/></li>`;
    };

    handleClick();
    
};

function stopGame() {
    if(numMatch === maxPairs) {
        console.log('welldone');
        stopTimer();
        congratsMessage();
    }
}

function congratsMessage() {
    document.getElementById('myModal').style.display = 'block';
    document.querySelector('#congrats-div').innerHTML = 

        `
        <h2>Congratulations!</h2>
        <h3>You completed the game in <span>${timerSpan.textContent}</span></h3>
        `
}
    
function match() {
    numMatch++;
    openedCards = [];
  
    document.querySelectorAll(".show").forEach((matchedCard) => {
      matchedCard.classList.add('match','animate_animated','animate_flip')
      matchedCard.classList.remove('show')
    });
  
  };
  

function unMatched() {
    openedCards = [];
  
    document.querySelectorAll(".show:not(.match)").forEach((unmatchedCard) => {
      unmatchedCard.classList = 'card show unmatch animate_animated animate_shake';
      document.querySelectorAll('.unmatch').forEach((unmatchedCard) => {
        setTimeout(function() {
          unmatchedCard.classList = 'animate_animated animate_flipInY card';
        }, 600);
      })
    });
  };

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


function increaseScore() {}

function changeScoreColor() {}





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