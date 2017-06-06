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

  var ending;

  if (c == 1) ending = 'st';
  else if (c == 2) ending = 'nd';
  else if (c == 3) ending = 'rd';
  else ending = 'th';
   
  // document.write(typeof c); // string
//   switch(c) {
//     case "1": // if (c === "1")
//       ending = 'st';
//       break;
//     case "2":
//       ending = 'nd';
//       break;
//     case "3":
//       ending = 'rd';
//       break;
//     default:
//       ending = 'th';
//   }
  
  document.write(c + '<sup>' + ending + '</sup> elem is ' + colours[c] + '<br>');
}
