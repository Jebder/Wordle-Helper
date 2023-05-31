var audio = document.getElementById("myAudio");
var btn = document.getElementById("myBtn");
var playButton = document.getElementById("playButton");

function myFunction() {
    audio.muted = !audio.muted;
    btn.innerHTML = audio.muted ? "Unmute":'Mute'
}

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}

function pauseAudio() {
  var audio = document.getElementById("myAudio");
  audio.pause();
}

document.addEventListener('mousemove', function() {

  playButton.click();
})