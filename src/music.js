var audio = document.getElementById("myAudio");
var muteIcon = document.getElementById('muteIcon');
var iconMute = document.getElementById('iconMute');

audio.volume = 0.1;


function togglePlay() {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
  } else {
    audio.pause();
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'inline';

  }
      
  } 






muteIcon.addEventListener('click', togglePlay);
