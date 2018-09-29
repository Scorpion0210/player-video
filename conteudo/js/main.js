var vid = document.getElementById('video-player');
console.log(vid);

vid.onseeked = function() {
    console.log("avancei ou retrocedi o video com o mouse");
};

vid.onplay = function() {
  console.log("PLAY");
};

vid.onpause = function() {
  console.log("PAUSE");
};

vid.onended = function() {
  console.log("FIM");
};

vid.ontimeupdate = function() {
  // Math.floor(20.5) => 20
  // arredonda o numero para baixo
  var perc = Math.floor(vid.currentTime) /  Math.floor(vid.duration) * 100;
  console.log(perc);
};

function setScore() {

}

function setLocation() {

}
