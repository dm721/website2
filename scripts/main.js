let myVariable = "Bob";
//alert(myVariable);
play();

function play() {
    var audio = new Audio('images/music.mp3');
    audio.loop = true;
    audio.play();
  }

  /*window.addEventListener('keydown', function (e) {
    this.alert(`You pressed ${e.key}`);
  }, false);
  */