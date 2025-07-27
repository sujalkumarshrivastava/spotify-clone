
const songs = [
  { name: "Aasan Nahi", file: "aasan.mp3" },
  { name: "Chupana Bhi Nahi Aata", file: "chupanaBhi.mp3" },
  { name: "Kaise Hua", file: "kaisehua.mp3" },
  { name: "Mere Nishaan", file: "MereNishaan.mp3" },
  { name: "Piya Aaina", file: "piyaaayena.mp3" },
  { name: "jalraj", file: "jalraj.mp3" },
  { name: "Main jagu", file: "mainjagu.mp3" },
  { name: "kehdu", file: "kehdu.mp3" },
  { name: "tu meri zindigi", file: "tumeri.mp3" },
  { name: "banger", file: "deewane hum nhi hote.mp3" },

];


const songList = document.getElementById("songList");
const audioPlayer = document.getElementById("audioplayer");
const songInfo = document.querySelector(".songinfo");
function playByList() {
  songs.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.classList.add("songItem");
    li.style.cursor = "pointer";

    li.addEventListener("click", () => {

      audioPlayer.src = `songs/${song.file}`;
      audioPlayer.play();


      document.querySelectorAll(".songItem").forEach(el => el.classList.remove("active"));
      li.classList.add("active");

      //agar song info is true
      if (songInfo) {
        songInfo.textContent = `Now Playing: ${song.name}`;
        songInfo.style.color = "black";
        songInfo.style.position = "relative";
        songInfo.style.margin = "-6px";
      }
    });
    songList.appendChild(li);
  });
}
playByList();

//pause play bro

let toggle = false;
let randomIndex = null;

function playpause() {
  const playPauseBtn = document.getElementById("playpause");
  // 
  // const imgElement = playPauseBtn.querySelector("img");

  playPauseBtn.addEventListener("click", function () {
    if (!toggle) {

      if (randomIndex === null) {
        randomIndex = Math.floor(Math.random() * songs.length);
        const selectedSong = songs[randomIndex];
        audioPlayer.src = `songs/${selectedSong.file}`;
        // imgElement.src = "pause.svg";

        if (songInfo) {
          songInfo.textContent = `Now playing: ${selectedSong.name}`;
          songInfo.style.color = "black";
          songInfo.style.position = "relative";
          songInfo.style.margin = "-7px";
        }
      }

      audioPlayer.play();
      playPauseBtn.src = "pause.svg";


      document.querySelectorAll(".songItem").forEach((el, index) => {
        el.classList.remove("active");
        if (index === randomIndex) {
          el.classList.add("active");
        }
      });
      toggle = true;
    } else {

      audioPlayer.pause();
      playPauseBtn.src = "play.svg";
      toggle = false;
    }

  });
}

playpause();
audioPlayer.onended = function () {
  randomIndex = null;
  playPauseBtn.src = "play.svg";
  toggle = false;
};

//next button
let nextbtn = document.getElementById("next");
function nextSong() {
  nextbtn.addEventListener("click", () => {
    if (randomIndex < songs.length - 1) {
      randomIndex++;
    }
    else {
      randomIndex = 0;
    }
    const selectedSong = songs[randomIndex];
    audioPlayer.src = `songs/${selectedSong.file}`;
    audioPlayer.play();
    //ye to gana ko likhna or style dena bata raha hai...
    if (songInfo) {
      songInfo.textContent = `Now playing: ${selectedSong.name}`;
      songInfo.style.color = "black";
      songInfo.style.position = "relative";
      songInfo.style.margin = "-7px";
    }
    document.querySelectorAll(".songItem").forEach((el, index) => {
      el.classList.remove("active");
      if (index === randomIndex) {
        el.classList.add("active");
      }
    });
  });
}
nextSong();
//previous index
let prevIndex = document.getElementById("prev");
function previousSong() {
  prevIndex.addEventListener("click", () => {
    if (randomIndex == 0) {
      randomIndex = songs.length - 1;
    }
    else {
      randomIndex--;
    }
    const selectedSong = songs[randomIndex];
    audioPlayer.src = `songs/${selectedSong.file}`;
    audioPlayer.play();


    if (songInfo) {
      songInfo.textContent = `Now playing: ${selectedSong.name}`;
      songInfo.style.color = "black";
      songInfo.style.position = "relative";
      songInfo.style.margin = "-7px";
    }
    document.querySelectorAll(".songItem").forEach((el, index) => {
      el.classList.remove("active");
      if (index === randomIndex) {
        el.classList.add("active");
      }
    });
  });
}
previousSong();

//library play button
let songname = document.getElementsByClassName("songname");
let isplaying = false;
let ridx = null;
function playRandomLibrary() {
  const liplay = document.getElementById("libraryPlay");
  liplay.addEventListener("click", () => {
    if (!isplaying) {

      if (ridx === null) {
        ridx = Math.floor(Math.random() * songs.length);
        const currentSong = songs[ridx];
        audioPlayer.src = `songs/${currentSong.file}`;

        if (songInfo) {
          songInfo.textContent = `Now Playing :${currentSong.name}`;
          songInfo.style.color = "black";
          songInfo.style.position = "relative";
          songInfo.style.margin = "-7px";
        }
        if (songname.length > 0) {
          songname[0].textContent = `is: ${currentSong.name}`;
        }
      }
      audioPlayer.play();
      liplay.src = ("pause.svg");
      // playbarwork();

      document.querySelectorAll(".songItem").forEach((el, index) => {
        el.classList.remove("active");
        if (index === ridx) {
          el.classList.add("active");
        }
      });
      isplaying = true;

    } else {
      audioPlayer.pause();
      liplay.src = ("play.svg");
      isplaying = false;
    }
  });
}
playRandomLibrary();
audioPlayer.onended = function () {
  ridx = null;
  liplay.src = ("pause.svg");
  isplaying = false;
};

// //library button ka kaam

// const libbtn = document.getElementById("librarybtn");
// let lib = document.getElementById("songlist");
// let isvisible = false;

// function library() {
//   libbtn.addEventListener("click", () => {

//     if (!isvisible) {
//       lib.style.display = "block";
//       songs = [];
//       // lib.innerHTML = " ";
//     }
//     else {
//       lib.style.display = " none";
//       songs = [
//         { name: "Aasan Nahi", file: "aasan.mp3" },
//         { name: "Chupana Bhi Nahi Aata", file: "chupanaBhi.mp3" },
//         { name: "Kaise Hua", file: "kaisehua.mp3" },
//         { name: "Mere Nishaan", file: "MereNishaan.mp3" },
//         { name: "Piya Aaina", file: "piyaaayena.mp3" },
//         { name: "jalraj", file: "jalraj.mp3" },
//         { name: "Main jagu", file: "mainjagu.mp3" },
//         { name: "kehdu", file: "kehdu.mp3" },
//         { name: "tu meri zindigi", file: "tumeri.mp3" },
//         { name: "banger", file: "deewane hum nhi hote.mp3" },
//       ];
//       playByList();
//     }
//   })
// }
// library();

// ab hoga cards ka kaam
let pb = document.getElementsByClassName("play-button");

//
const s1 = [
  { name: "sahiba", file: "sahiba.mp3" }
]
pb[0].addEventListener("click", () => {
  console.log("sahiba is being played");
  audioPlayer.src = `songs/${s1.file}`;
  audioPlayer.play();


  document.querySelectorAll(".songItem").forEach(el => el.classList.remove("active"));
  li.classList.add("active");

  //agar song info is true
  if (songInfo) {
    songInfo.textContent = `Now Playing: ${song.name}`;
    songInfo.style.color = "black";
    songInfo.style.position = "relative";
    songInfo.style.margin = "-6px";
  }

});
pb[1].addEventListener("click", () => {
  console.log("second");
})
pb[2].addEventListener("click", () => {
  console.log("third");
})
pb[3].addEventListener("click", () => {
  console.log("fourth");
})
pb[4].addEventListener("click", () => {
  console.log("fifth");
})
pb[5].addEventListener("click", () => {
  console.log("sixth");
})
pb[6].addEventListener("click", () => {
  console.log("seventh");
})
pb[7].addEventListener("click", () => {
  console.log("eight");
})
pb[8].addEventListener("click", () => {
  console.log("nine");
})
pb[9].addEventListener("click", () => {
  console.log("ten");
})
pb[10].addEventListener("click", () => {
  console.log("eleven");
})

