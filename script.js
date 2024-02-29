console.log("Welcome to Spotify_")
  
//Initialize the variables

const songIndex = 0;
const audioElement = new Audio('songs_spotify/moti.mp3');
const playBtn = document.getElementById('play-button');
const pauseBtn = document.getElementById('pause-button');
const progressBar = document.getElementById('progressBar');

let songs = [
  { songName: "Calm-Down", songPath: "songs_spotify/calm.mp3" },
  { songName: "Moti-Verana-Chokma", songPath: "songs_spotify/moti.mp3" },
  { songName: "Chaleya", songPath: "songs_spotify/chaleya.mp3" },
  { songName: "Teriyan Adavaan", songPath: "songs_spotify/teriyan.mp3" },
];

// Play/Pause songs
playBtn.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playBtn.classList.remove('play-button');
    playBtn.classList.add('pause-button');
  }
  // else {
    // audioElement.paused();
    // playBtn.classList.remove('pause-button');
    // playBtn.classList.add('play-button');
  // };
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate');
  //Update seekbar
})
