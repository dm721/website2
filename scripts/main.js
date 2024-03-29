documentHeight();
checkVideo();
play();

function checkVideo() {
  window.onload = function(){
    const video = document.getElementById("myVideo");
    video.addEventListener("loadeddata", (event) => {
      play();
    });
  }
}

function play() {
  var audio = new Audio('images/music2.mp3');
  audio.loop = true; 
  audio.play();
  audio.volume = 0.1;
}

function documentHeight() {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
 }