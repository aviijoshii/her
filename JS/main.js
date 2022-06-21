const music = document.querySelector("audio");
const play = document.getElementById('play');
let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");  
}

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
}

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();
})


