// scope
// hoisting

var x = 10; // global

document.write('1. ', x, '<br>');
f();
document.write('3. ', x, '<br>');


function f() {
  x = 33; // local
  document.write('2. ', x, '<br>');

  var x;
  x = 14;
  document.write('4. ', x, '<br>');
}

