///define audio functions
let audio = {
    ShuffleSound: new Audio("assets/audio/shuffling-cards.mp3"),
 
    soundVolumeSlider: document.getElementById("volume-slider"),
    soundOnOff: document.getElementById("sound-toggle"),
    soundMute: false,
    lastVolume: 0,
};

function deckShufflePlay() {
        if (audio.soundMute === true) {
            return;
        } else {
            audio.ShuffleSound.play();
        }
}