var audio = document.getElementById("myAudio");
var btn = document.getElementById("myBtn");

function myFunction() {
    audio.muted = !audio.muted;
    btn.innerHTML = audio.muted ? "Unmute":'Mute'
}