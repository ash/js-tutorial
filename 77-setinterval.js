document.getElementById('log').innerHTML += 'Before<br>';
var interval = setInterval(f, 1000); // milliseconds
document.getElementById('log').innerHTML += 'After<br>';

var counter = 0;
function f() {
  counter++;
  document.getElementById('log').innerHTML += 
    'f() called ' + counter + ' time(s)<br>';
 
  if (counter == 10) {
    clearInterval(interval);
  }
}

