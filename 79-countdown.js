var max_time = 60 * 60;

var t0 = new Date();

displayTime();
var interval = setInterval(displayTime, 3000);


function displayTime() {
  var t = new Date();
  var diff = Math.round((t - t0) / 1000);
  var time_left = max_time - diff;
  
  var min = Math.floor(time_left / 60);
  var sec = time_left % 60;
  
  document.getElementById('minutes').innerHTML = fix(min);
  document.getElementById('seconds').innerHTML = fix(sec);
  
  if (!time_left) {
    clearInterval(interval);
  }
}

function fix(x) {
  return x < 10 ? '0' + x : x;
}

