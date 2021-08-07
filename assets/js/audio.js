///define audio functions
let audio = {
    ShuffleSound: new Audio('assets/audio/shuffle.mp3'),
    
 
    soundVolumeSlider: document.getElementById("volume-slider"),
    soundOnOff: document.getElementById("sound-toggle"),
    soundMute: false,
    lastVolume: 0,
};

let easySounds = ['dog', 'shuffle'];

function deckShufflePlay() {
        if (audio.soundMute === true) {
            return;
        } else {
            audio.ShuffleSound.currentTime = 0;
            audio.ShuffleSound.play();
        }
}

function playAnimalSounds (animalName){
    animalAudio = new Audio(`assets/audio/${animalName}.mp3`);
    setTimeout(function(){
        animalAudio.pause();
    },2000);
    animalAudio.play();
}

function cardTurnOver () {
    cardClick = new Audio('assets/audio/click2.mp3');
    if (audio.soundMute === true) {
        return;
    } else {
        cardClick.currentTime = 0;
        cardClick.play();
    }
}

function wrongMatch () {
    wrongCard = new Audio('assets/audio/wrong-match.mp3');
    if (audio.soundMute === true) {
        return;
    } else {
        wrongCard.currentTime = 0;
        wrongCard.play();
    }
}

function soundPause(){

}