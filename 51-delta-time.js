var d = new Date();
var t0 = d.getTime();

var sum = 0; 
for (var j = 0; j < 10000000; j++) {
  for (var i = 0; i < 100000000; i++) {
     sum += i;
  }
}

document.write(sum, '<br>');
d = new Date();
var t = d.getTime();
document.write(t - t0, '<br>');
document.write('done', '<br>');



