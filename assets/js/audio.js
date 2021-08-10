//Audio global variables
let volumeSlider = document.getElementById("volume-slider");
let soundMute = false;
let lastVolume = 0;

/**Gets the asset 'shuffle', checks to see if mute is true, if so, return with no sound.
 * If mute is false, resets the sound track, adjusts volume based on the volumeSlider setting
 * then plays sound.
 */
function deckShufflePlay() {
    const shuffleSound= new Audio('assets/audio/shuffle.mp3');
    if (soundMute === true) {
        return;
    } else {
        shuffleSound.currentTime = 0;
        shuffleSound.volume = volumeSlider.value / 100;
        shuffleSound.play();
    }
}

/**Gets the animalAusio asset based on the parameter animalName filling in the source string using
 * a specific letter that corresponds to the type of animal eg L = Lion. This ensures that the correct 
 * animal sound is played for specific animal matches. Again checks volume and plays sound. 
 */
function playAnimalSounds (animalName){
    let animalAudio = new Audio(`assets/audio/${animalName}.mp3`);
    setTimeout(function(){
        animalAudio.pause();
    },2000);
    if (soundMute === true) {
        return;
    } else {
        animalAudio.currentTime = 0;
        animalAudio.volume = volumeSlider.value / 100;
        animalAudio.play();
    }
}

/**Gets the asset 'click2', checks to see if mute is true, if so, return with no sound.
 * If mute is false, resets the sound track, adjusts volume based on the volumeSlider setting
 * then plays sound.
 */
function cardTurnOver () {
    const cardClick = new Audio('assets/audio/click2.mp3');
    if (soundMute === true) {
        return;
    } else {
        cardClick.currentTime = 0;
        cardClick.volume = volumeSlider.value / 100;
        cardClick.play();
    }
}

/**Gets the asset 'wrong-match', checks to see if mute is true, if so, return with no sound.
 * If mute is false, resets the sound track, adjusts volume based on the volumeSlider setting
 * then plays sound.
 */
function wrongMatch () {
    const wrongCard = new Audio('assets/audio/wrong-match.mp3');
    if (soundMute === true) {
        return;
    } else {
        wrongCard.currentTime = 0;
        wrongCard.volume = volumeSlider.value / 100;
        wrongCard.play();
    }
}

/**Function adjusts volumeSlider setting to 0 if sound mute is toggled
 */
function audioMute() {
    if (soundMute === false) {
        soundMute = true;
        lastVolume = volumeSlider.value;
        volumeSlider.value = 0;
    } else if (soundMute === true) {
        soundMute = false;
        volumeSlider.value = lastVolume;
    }
}

//Gives the sound toggle a listener to action the audioMute function when selected.
document.querySelector("#sound-toggle").addEventListener('change', function(){
    audioMute();
});
