window.onload = setInterval(GameLoop, 1000 / 10); //10fps

let myAudio = new Audio();

myAudio.src = '/audio/indaclub.ogg';

function GameLoop() {
    myAudio.play();
    if (myAudio.paused == true) {
        myAudio.play();
    }
}
