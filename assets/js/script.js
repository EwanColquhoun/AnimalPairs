//When the page(document) loads the function startGame is called.
document.addEventListener("DOMContentLoaded", startGame);

//App global variables
const diffButtons = document.getElementsByClassName("diff-btn");
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

//Timer variables
var timerSpan = document.getElementById("timer"),
    seconds = 0, minutes = 0,
    t;

//Adds event listeners for the difficulty buttons and the reset button. 
for (let i = 0; i < diffButtons.length; i++) {
    diffButtons[i].addEventListener("click", changeDifficulty);
}
const resetBtn = document.getElementById("reset-game").addEventListener('click', resetGame);

/**Welcome modal displays on launch. Function ensures clicking anywhere (except buttons) closes the modal to allow
 * access to the app. Clicking on buttons produces the expected response 
 * eg Easy = closes modal then play the game on easy.
  */
function welcomeMessage() {
    
    document.querySelector("#welcome-modal-box").addEventListener('click', function(){
        document.getElementById('welcome-modal-box').style.display = 'none';
    });
    
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

/**1. Adds and event listener to the cards that fires cardTurnOver and addTime functions,
 * 2. Checks to see if card is shown, if it i, returns otherwise;
 * 3. Adds classes to card to reflect the animation for showing a card.
 * 4. Populates the openedCards array to log the opened card inner html.
 * 5. If the openedCards length is greater than 1 it checks the new open card innerHTML for a match
 * with the openedCards[0] position.
 * 6. If it is a match it fires the match, checkDataMatch functions then clears the data in the cardsNum variable.
 * 7. If no match - it fires the wronMatch and unMatched functions.
 * 8. If all the cards are shown it fires the stopGame function to end the game.
 */
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
        var cardsNum = openedCards.toString(); 
        if (openedCards.length > 1){
            if (openCard === openedCards[0]) {
                match(); 
                checkDataMatch(cardsNum);
                cardsNum = '';
            } else {
                wrongMatch();
                unMatched();
            }
        }
        stopGame();
        });
    });
}

/**Called when the DOM is loaded it fires the respective game functions after it has reset the number of matches
 * and the moves variables. The default level is easy as actioned by the showEasy function.
 */
function startGame() {
    numMatch = 0;
    moves = 0;
    showEasy();
    welcomeMessage();
    resetTimer();
    changeDifficulty();
    showRules();
    showSound();
}

/**Called when all the cards are shown. This function check that the maximum amount of pairs has been achieved.
 * It stops the timer, and calls the functions to show the congratulations modal.
 */
function stopGame() {
    if(numMatch === maxPairs) {
        stopTimer();
        congratsMessage();
        changeScoreText();
    }
}

/**When called it adds a click listener to the rules button to show the rules (welcome) modal.
 */
function showRules() {
    document.querySelector('#rules-button').addEventListener('click', function(){
        document.getElementById('welcome-modal-box').style.display = 'block';
    });
}

/**When called it adds a click listener to the sounds buttons. On click it displays the sound controls modal,
 * It also ensures that you can click on the sound controls and not close the modal. If you click outside of the 
 * sounds modal content the modal will close. 
 */
function showSound (){
    document.querySelectorAll('.sound-button').forEach((button) => {
        button.addEventListener("click", function(){
            document.getElementById('sounds-modal-box').style.display = 'block';
            });
        });
    document.querySelector('#sounds-modal-content').addEventListener('click', function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    });
        document.querySelector('#sounds-modal-box').addEventListener('click', function( ){
        document.getElementById('sounds-modal-box').style.display = 'none';
    });
}

/**Adds an event listener to close the congrats modal. Populates the congrats div with some html to reflect
 * the result of the game. It takes the timer span text content for the time and displays text in the 'result'
 * span depending on the outcome of the changeScoreText function. It then adds functionallity to the difficulty
 * buttons to reset the game.
*/
function congratsMessage() {
    document.querySelector("#congrats-modal").addEventListener('click', function( ){
        document.getElementById('congrats-modal').style.display = 'none';
    });

    document.getElementById('congrats-modal').style.display = 'block';
    document.querySelector('#congrats-div').innerHTML = 

        `
        <h2>Congratulations!</h2>
        <h3>You completed the game in <span>${timerSpan.textContent}.<br>
        <span id="result"></span><br><i class="fas fa-thumbs-up"></i></span></h3><br>
        <h2><i class="fas fa-arrow-down"></i> Choose a difficulty to try again! <i class="fas fa-arrow-down"></i></h2>
        <button id="modal-close-easy" aria-label="Easy Difficulty button" name="modal-close-easy-button" class="close-modal easy">Easy</button><button id="modal-close-medium" aria-label="Medium Difficulty button" name="modal-close-medium-button" class="close-modal medium">Medium</button><button id="modal-close-hard" aria-label="Hard Difficulty button" name="modal-close-hard-button" class="close-modal hard">Hard</button>

        `;
    
    document.getElementById('modal-close-easy').addEventListener('click', function() {
            document.getElementById('congrats-modal').style.display = 'none';
            deckShufflePlay();
            startGame();
            showEasy();
    });

    document.getElementById('modal-close-medium').addEventListener('click', function() {
            document.getElementById('congrats-modal').style.display = 'none';
            deckShufflePlay();
            startGame();
            showMedium();
    });

    document.getElementById('modal-close-hard').addEventListener('click', function() {
            document.getElementById('congrats-modal').style.display = 'none';
            deckShufflePlay();
            startGame();
            showHard();    
    });
}

/**Called when cards match. Adds one onto the moves, nuimber of matches and ensures the openedCards array is cleared
 * It adds classes to the cards that have 'show' as a class. 
 */
function match() {
    match.called = true;
    moves++;
    numMatch++;
    openedCards = [];
    increaseScore();
  
    document.querySelectorAll(".show").forEach((matchedCard) => {
      matchedCard.classList.add('match','animated','flipInX');
      matchedCard.classList.remove('show');
    });
}
  

  /**Adds one to the moves. For each card that isn't matched but shown it adds some classes to reflect unmatched animation
   * After 900ms (animation finished) each unmatched card has it's classlist replaced with the 'card' class.
   */
function unMatched() {
    unMatched.called = true;
    moves++;
    openedCards = [];
  
    document.querySelectorAll(".show:not(.match)").forEach((unmatchedCard) => {
      unmatchedCard.classList = 'card show unmatch animated shake';
      document.querySelectorAll('.unmatch').forEach((unmatchedCard) => {
        setTimeout(function() {
          unmatchedCard.classList = 'card';
        }, 900);
      });
    });
}

/**Function changes the innerHTML of the deck of cards to reflect the level of difficulty selected.
 * Easy = 12 cards.
 * It then updates the score innerHTML with the correct pairs number (6).
 */
function showEasy(){
    maxPairs = easyCards.length;
    document.querySelector('#deck').innerHTML = '';
    document.querySelector('#deck').classList.add('easy-deck');
    document.querySelector('#deck').classList.remove('hard-deck');
    shuffle(easyPairs);
    for (var a=0; a<easyPairs.length; a++){
        document.querySelector('.deck').innerHTML += `<li class="card" data-ref="${easyPairs[a]}"><img src="assets/images/${easyPairs[a]}.jpg" alt="A picture of a ${easyPairs[a]}"/></li>`;
    }
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`;
    handleClick();
}

/**Function changes the innerHTML of the deck of cards to reflect the level of difficulty selected.
 * Medium = 16 cards.
 * It then updates the score innerHTML with the correct pairs number (8).
 */
function showMedium(){
    maxPairs = mediumCards.length;
    document.querySelector('#deck').innerHTML = '';
    document.querySelector('#deck').classList.add('easy-deck');
    document.querySelector('#deck').classList.remove('hard-deck');
    shuffle(mediumPairs);
        for (var a=0; a<mediumPairs.length; a++){
            document.querySelector('.deck').innerHTML += `<li class="card"><img src="assets/images/${mediumPairs[a]}.jpg" alt="A picture of a ${mediumPairs[a]}"/></li>`;
    }
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`;
    handleClick();
}

/**Function changes the innerHTML of the deck of cards to reflect the level of difficulty selected.
 * Difficult = 20 cards.
 * It then updates the score innerHTML with the correct pairs number (10).
 */
function showHard(){
    maxPairs = hardCards.length;
    document.querySelector('#deck').innerHTML = '';
    document.querySelector('#deck').classList.add('hard-deck');
    shuffle(hardPairs);
        for (var a=0; a<hardPairs.length; a++){
            document.querySelector('.deck').innerHTML += `<li class="card"><img src="assets/images/${hardPairs[a]}.jpg" alt="A picture of a ${hardPairs[a]}"/></li>`;
    }
    cardsNum = document.getElementById('deck').childElementCount/2;
    score.innerHTML = `Pairs ${numMatch}/${cardsNum}`;
    handleClick();
}

/**If cards match function pulls the individual animal identifying letter from the cardsNum string and actions the 
 * playAnimalSounds function with the animalName as a property.
 */
function checkDataMatch(cardsNum){
    if(match){
        animalName = cardsNum.charAt(24);
        playAnimalSounds(animalName);
    } else {
        return;
    }
}

/**Actions the change of difficulty depending on which difficulty button was clicked. */
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

/**Resets the game when called by the reset button */
function resetGame() {
    deckShufflePlay();
    stopTimer();
    resetTimer();
    startGame();
}

/**Shuffle function based on the this shuffle - source: http://stackoverflow.com/a/2450976 */
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

/**When called it increases the score displayed on the screen. */
function increaseScore() {
        score.innerHTML = `Pairs ${numMatch}/${maxPairs}`;
}

/**Changes the content of the results span depending on how many moves were taken to complete the game */
function changeScoreText() {
    let result = document.querySelector('#result');
    if (moves <= 15){
        result.innerHTML = 'Your result was EXCELLENT!';
    } else if (moves > 15 && moves < 25){
      result.innerHTML = 'Well Done! Keep practising to improve your score';
    } else {
       result.innerHTML = 'Good, but see if you can do it in less moves next time!';
    }
}

/**Changes the colour and background of the timer span to reflect the length of time taken. */
function timerFlash() {
    if (seconds >= 50) {
        timerSpan.classList.add('flash');
    }

    if (minutes >= 2) {
        timerSpan.classList.remove('flash');
        timerSpan.classList.add('long-flash');
    }
}

/**Timer functionallity modified from - source: https://jsfiddle.net/Daniel_Hug/pvk6p/
 * Sets the timer to 0, adds the time to the timerSpan to be displayed.
*/
function addTime() {
    clearTimeout(t);
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        }
    
    timerSpan.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + " : " + (seconds > 9 ? seconds : "0" + seconds);
    timer();
    timerFlash();
}

/**Clears the timeout */
function stopTimer() {
    clearTimeout(t);
}

/**Removes the change of timer colour on reset of the timer. Timer starts again. */
function resetTimer() {
    timerSpan.classList.remove('flash', 'long-flash');
    seconds = 0;
    minutes = 0;
    timerSpan.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

/**Adds time in 1s intervals. */
function timer() {
    t = setTimeout(addTime, 1000);
}