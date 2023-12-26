documentHeight();
play();
checkVideo();

function checkVideo() {
  window.onload = function(){
    const video = document.getElementById("myVideo");
    video.addEventListener("loadeddata", (event) => {
      alert("video loaded");
    });
  }
}

function play() {
  var audio = new Audio('images/music.mp3');
  audio.loop = true; 
  audio.play();
  audio.volume = 0.1;
}

function documentHeight() {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
  alert('test');
 }

