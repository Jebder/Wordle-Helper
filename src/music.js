var isMuted = false;
var audio = document.getElementById("myAudio");
var musicNote = document.getElementById("music-note");
var muteSymbol = document.getElementById("mute-symbol");

audio.addEventListener("canplaythrough", function() {
  if (!isMuted) {
    audio.play();
  }
})

function toggleMute() {
  if (isMuted) {
    audio.play();
    musicNote.style.display = "inline";
    muteSymbol.style.display = "none";
  } else {
    audio.pause();
    musicNote.style.display = "none";
    muteSymbol.style.display = "inline";
  }

  isMuted = !isMuted;
}
