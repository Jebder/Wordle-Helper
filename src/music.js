var audio = document.getElementById("myAudio");
var muteIcon = document.getElementById('muteIcon');



function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.classList.remove('icon');
  } else {
    audio.muted = true;
    muteIcon.classList.add('icon');
  }
}

muteIcon.addEventListener('click', toggleMute);

