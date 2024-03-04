const playlistSongs = document.getElementById('playlist-songs')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')
const shuffleButton = document.getElementById('shuffle')

let allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    }
]

const audio = new Audio()
let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
}

const renderSongs = (array) => {
    const songsHTML = array.map((song) => {
        return
        `<li id="song-${song.id}" class="playlist-song">
            <button class="playlist-song-info">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
            </button>
</li>`

    });
    return songsHTML;
};
