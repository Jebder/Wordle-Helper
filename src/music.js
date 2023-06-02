var audio = document.getElementById("myAudio");
var pauseIcon = document.getElementById('pauseIcon');
var iconMute = document.getElementById('iconMute');
var playIcon = document.getElementById('playIcon')
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
