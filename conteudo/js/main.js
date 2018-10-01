var vid = document.getElementById('video-player');

vid.onseeked = function() {
  // console.log("avancei ou retrocedi o video com o mouse");
};

vid.onplay = function() {
  inicia();
};

vid.onpause = function() {
  // console.log("PAUSE");
};

vid.onended = function() {
  setLessonStatus("completed");
  // console.log("lesson_status = completed");
};

vid.ontimeupdate = function() {
  // Math.floor(20.5) => 20
  // arredonda o numero para baixo
  var perc = Math.floor(vid.currentTime) /  Math.floor(vid.duration) * 100;
  var location = vid.currentTime;
  grava(perc, location);
  // console.log(perc);
};

function grava(p, l) {
  setScore(p);
  setLocation(l);
  saveScorm();
}
