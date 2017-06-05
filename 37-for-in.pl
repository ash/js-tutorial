// var months = ['January', 'February', 'March'];
// for (var i = 0; i < months.length; i++) {
//   document.write('month #' + i + ' is ' + months[i] + '<br>');
// }

var months = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March'
};

for (var short in months) { // for-in
  document.write(short + ' is ' + months[short] + '<br>');
}

var colours = ['red', 'green', 'blue', 'yellow', 'orange'];
for (var c in colours) {
  document.write(c + '<sup>th</sup> elem is ' + colours[c] + '<br>');
}