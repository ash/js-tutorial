document.getElementById('log').innerHTML += 'Before<br>';
setTimeout(f, 2000); // milliseconds
document.getElementById('log').innerHTML += 'After<br>';

function f() {
  document.getElementById('log').innerHTML += 'f() called'
}

