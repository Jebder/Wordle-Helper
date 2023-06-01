var audio = document.getElementById("myAudio");
var muteIcon = document.getElementById('muteIcon');
var iconMute = document.getElementById('iconMute')


function togglePlay() {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
  } else {
    audio.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
  }  
    
  }
}

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.classList.remove('icon');
  } else {
    audio.muted = true;
    muteIcon.classList.add('iconMute');
  }
}

muteIcon.addEventListener('click', toggleMute);

