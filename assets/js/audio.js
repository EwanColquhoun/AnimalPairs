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
    animalAudio.play();
}

function cardTurnOver () {
    cardClick = new Audio('assets/audio/click.mp3');
    if (audio.soundMute === true) {
        return;
    } else {
        cardClick.currentTime = 0;
        cardClick.play();
    }
}
