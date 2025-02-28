document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}
  fetch("https://script.google.com/macros/s/AKfycbwRTuXI4PMjGI9lIqwK4Pih00i0kHsLw2pudIFLs13ESrXbfFGjIpFWP3qn8qCkiLbI8A/exec")
    .then(response => response.text())
    .then(count => {
      document.getElementById("visit-count").textContent = count;
    })
    .catch(error => console.error("Error fetching visit count:", error));

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "Aassai-Perasai",
    artist: "Hiphop Tamizha",
    url: "Aasai-Perasai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aathadi",
    artist: "Hiphop Tamizha",
    url: "Aathadi-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Achacho",
    artist: "Hiphop Tamizha",
    url: "Achacho.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Adiye-Sakkarakatti",
    artist: "Hiphop Tamizha",
    url: "Adiye-Sakkarakatti-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Amman",
    artist: "Hiphop Tamizha",
    url: "Amman song.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Arakkiyae",
    artist: "Hiphop Tamizha",
    url: "Arakkiyae-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  // 3 list
  {
    title: "Azhage",
    artist: "Hiphop Tamizha",
    url: "Azhage.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Bahubalikku-Oru-Kattappa",
    artist: "Hiphop Tamizha",
    url: "Bahubalikku-Oru-Kattappa-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Breakup-Song",
    artist: "Hiphop Tamizha",
    url: "Breakup-Song-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Certified Self Made",
    artist: "Hiphop Tamizha",
    url: "Certified Self Made.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  // 4 list
  {
    title: "Chinna-Paiyan",
    artist: "Hiphop Tamizha",
    url: "Chinna-Paiyan-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enna-Nadanthalum",
    artist: "Hiphop Tamizha",
    url: "Enna-Nadanthalum-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Erangi-Vandhu",
    artist: "Hiphop Tamizha",
    url: "Erangi-Vandhu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Happy-Birthday",
    artist: "Hiphop Tamizha",
    url: "Happy-Birthday-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Happy-New-Year",
    artist: "Hiphop Tamizha",
    url: "Happy-New-Year.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hi-Sonna-Pothum",
    artist: "Hiphop Tamizha",
    url: "Hi-Sonna-Pothum-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  //5 list
  {
    title: "Indru-Netru-Naalai",
    artist: "Hiphop Tamizha",
    url: "Indru-Netru-Naalai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Jo Jo",
    artist: "Hiphop Tamizha",
    url: "Jo Jo.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhal-Cricket",
    artist: "Hiphop Tamizha",
    url: "Kadhal-Cricket.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhal-Oru-Aagayam",
    artist: "Hiphop Tamizha",
    url: "Kadhal-Oru-Aagayam-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhale-Kadhale",
    artist: "Hiphop Tamizha",
    url: "Kadhale-Kadhale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  // 6 list
  {
    title: "Kadhalikathey",
    artist: "Hiphop Tamizha",
    url: "Kadhalikathey-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kalakkalu-Mr.-Localu",
    artist: "Hiphop Tamizha",
    url: "Kalakkalu-Mr.-Localu-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kanagvel kaaka",
    artist: "Hiphop Tamizha",
    url: "Kanagvel Kaaka.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannala-Kannala",
    artist: "Hiphop Tamizha",
    url: "Kannala-Kannala.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Karakudi-Ilavarasi-En-Nenja",
    artist: "Hiphop Tamizha",
    url: "Karakudi-Ilavarasi-En-Nenja-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kerala-Song",
    artist: "Hiphop Tamizha",
    url: "Kerala-Song-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kovai-Gethu-Anthem",
    artist: "Hiphop Tamizha",
    url: "Kovai-Gethu-Anthem-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kuchi-Mittai",
    artist: "Hiphop Tamizha",
    url: "Kuchi-Mittai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maattikkichey-Mattikkichey",
    artist: "Hiphop Tamizha",
    url: "Maattikkichey-Maattikkichey-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  // 2 list
  {
    title: "Madras-To-Madurai",
    artist: "Hiphop Tamizha",
    url: "Madras-To-Madurai-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Meesaya-Murukku",
    artist: "Hiphop Tamizha",
    url: "Meesaya-Murukku-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Middle-Class",
    artist: "Hiphop Tamizha",
    url: "Middle-Class-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Morattu-Single",
    artist: "Hiphop Tamizha",
    url: "Morattu-Single-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naan-Konjam",
    artist: "Hiphop Tamizha",
    url: "Naan-Konjam-Karuppu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naan-Siricha",
    artist: "Hiphop Tamizha",
    url: "Naan-Siricha-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nanba-Nanba",
    artist: "Hiphop Tamizha",
    url: "Nanba-Nanba-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nee-Nenacha",
    artist: "Hiphop Tamizha",
    url: "Nee-Nenacha-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nee-Sirichalum",
    artist: "Hiphop Tamizha",
    url: "Nee-Sirichalum-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Neeyum-Naanum-Anbe",
    artist: "Hiphop Tamizha",
    url: "Neeyum-Naanum-Anbe-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Oliyum-Oliyum",
    artist: "Hiphop Tamizha",
    url: "Oliyum-Oliyum-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Onnuku-Renda",
    artist: "Hiphop Tamizha",
    url: "Onnuku-Renda-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Kuchi-Oru-Kulfi",
    artist: "Hiphop Tamizha",
    url: "Oru-Kuchi-Oru-Kulfi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oxygen",
    artist: "Hiphop Tamizha",
    url: "Oxygen.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Paisa-note",
    artist: "Hiphop Tamizha",
    url: "Paisa-Note-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pallikoodam-The-Farewell",
    artist: "Hiphop Tamizha",
    url: "Pallikoodam-The-Farewell-Song-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pazhagikalam",
    artist: "Hiphop Tamizha",
    url: "Pazhagikalam-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pudichiruka-Illa-Pudikalaya",
    artist: "Hiphop Tamizha",
    url: "Pudichiruka-Illa-Pudikalaya-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Red-Cardu",
    artist: "Hiphop Tamizha",
    url: "Red-Cardu-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Saitji-Saitji",
    artist: "Hiphop Tamizha",
    url: "Saitji-Saitji-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Single-pasanga",
    artist: "Hiphop Tamizha",
    url: "Single-Pasanga-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sivakumar-Pondati",
    artist: "Hiphop Tamizha",
    url: "Sivakumar-Pondati-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Takkaru-Takkaru",
    artist: "Hiphop Tamizha",
    url: "Takkaru-Takkaru-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Takkunu-Takkunu",
    artist: "Hiphop Tamizha",
    url: "Takkunu-Takkunu-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thanga-Sela",
    artist: "Hiphop Tamizha",
    url: "Thanga-Sela-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thani-Oruvan",
    artist: "Hiphop Tamizha",
    url: "Thani-Oruvan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Theemai-Dhan-Vellum",
    artist: "Hiphop Tamizha",
    url: "Theemai-Dhan-Vellum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thunder-Kaaran",
    artist: "Hiphop Tamizha",
    url: "Thunder-Kaaran-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaadi-Nee-Vaadi",
    artist: "Hiphop Tamizha",
    url: "Vaadi-Nee-Vaadi-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "vanga-Machan-Vanga",
    artist: "Hiphop Tamizha",
    url: "Vanga-Machan-Vanga-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Veedhikor-Jaadhi",
    artist: "Hiphop Tamizha",
    url: "Veedhikor-Jaadhi-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Veeran-Thiruvizha",
    artist: "Hiphop Tamizha",
    url: "Veeran-Thiruvizha-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Vengamavan",
    artist: "Hiphop Tamizha",
    url: "Vengamavan-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yaara-Comali",
    artist: "Hiphop Tamizha",
    url: "Yaara-Comali-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yaarenna-Sonnalum",
    artist: "Hiphop Tamizha",
    url: "Yaarenna-Sonnalum-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  }
];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "default-cover.jpg"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "hiphop-cover-1.png",
      "hiphop-cover-2.png",
      "hiphop-cover-3.png",
      "hiphop_cover-4.jpg"
    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
