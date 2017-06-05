var message = 'I will use JS<br>';

// document.write(message);
// document.write(message);
// document.write(message);

//document.write(message.repeat(3));

// for (initializer; test condition; loop operation) {
//   statement(s)
// }

// for (var i = 0; i < 3; i = i + 1) {
//   document.write(message);
// }

var i = 0;
for (; i < 3;) { // loop body
  // iteration
  document.write(i + ': ' + (i < 3) + ' ' + message);
  i = i + 1;
}
document.write('done');

