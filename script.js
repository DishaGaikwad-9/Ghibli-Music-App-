const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("song-title");
const cover = document.getElementById("cover");
const themeToggle = document.getElementById("theme-toggle");
const firefliesContainer = document.getElementById("fireflies");
const clouds = document.getElementById("clouds");

const songs = [
   {
        title: "My Neighbor Totoro - Path of the Wind",
        src: "assets/songs/totoro.mp3",
        cover: "assets/covers/totoro.jpg"
   },
  {
    title: "Spirited Away - Always With Me",
    src: "assets/songs/spirited-away.mp3",
    cover: "assets/covers/spirited-away.jpg"
  },
  {
    title: "Kiki's Delivery Service - A Town With An Ocean View",
    src: "assets/songs/kiki.mp3",
    cover: "assets/covers/kiki.jpg"
  },
  {
    title: "Whisper Of The Heart - Country Road",
    src: "assets/songs/whisper_heart.mp3",
    cover: "assets/covers/whisper_heart.jpg"
  },
  {
    title: "Ponyo - Ponyo On The Cliff By The Sea",
    src: "assets/songs/ponyo.mp3",
    cover: "assets/covers/ponyo.jpg"
  }
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio(songs[currentSongIndex].src);

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  cover.src = song.cover;
  audio.src = song.src;
}

function playPauseSong() {
  if (isPlaying) {
    audio.pause();
    playBtn.querySelector("img").src = "assets/covers/play.png";
  } else {
    audio.play();
    playBtn.querySelector("img").src = "assets/covers/pause.png";
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) audio.play();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  if (isPlaying) audio.play();
}

playBtn.addEventListener("click", playPauseSong);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
loadSong(currentSongIndex);

// TOGGLE MODE
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
  const isNight = document.body.classList.contains("night");

  if (isNight) {
    clouds.style.display = "none";
    firefliesContainer.style.display = "block";
    createFireflies(30);
  } else {
    clouds.style.display = "block";
    firefliesContainer.innerHTML = "";
    firefliesContainer.style.display = "none";
  }
});

function createFireflies(count) {
  firefliesContainer.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const f = document.createElement("div");
    f.classList.add("firefly");
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 100 + "vh";
    f.style.animationDuration = (Math.random() * 3 + 2) + "s";
    firefliesContainer.appendChild(f);
  }
}
