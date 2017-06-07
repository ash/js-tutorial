function displayTime() {
  var d = new Date();

  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  document.getElementById('hours').innerHTML = fix(h);
  document.getElementById('minutes').innerHTML = fix(m);
  document.getElementById('seconds').innerHTML = fix(s);
}

displayTime();

setInterval(displayTime, 1000);

function fix(x) {
  return x < 10 ? '0' + x : x;
}

