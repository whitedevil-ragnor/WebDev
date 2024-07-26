let isPlaying = false;
const playPauseButton = document.getElementById('playPauseButton');
const playPauseIcon = document.getElementById('playPauseIcon');
const audio = new Audio('your-audio-file.mp3'); // Replace with your audio file

function togglePlayPause() {
  isPlaying = !isPlaying;
  updateButtonState();
}

function updateButtonState() {
  if (isPlaying) {
    playPauseIcon.src = 'pause-icon.png'; // Replace with your pause icon image
    audio.play();
  } else {
    playPauseIcon.src = 'play-icon.png'; // Replace with your play icon image
    audio.pause();
  }
}

