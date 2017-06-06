// scope

var x = 10; // global

document.write('1. ', x, '<br>');
f();
document.write('3. ', x, '<br>');


function f() {
  var x = 33; // local
  document.write('2. ', x, '<br>');
}

