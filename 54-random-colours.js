var colours = ['red', 'green', 'blue', 'yellow', 'violet', 'purple'];

var used = [];


for (var i = 0; i < 3; i++) {
  var index = randomIndex();
  
  var c = 10;
  while(c-- && used[index]) {
    index = randomIndex();
  }
 
  used[index] = true;
  
  document.write(colours[index], ' ');
}

function randomIndex() {
  return Math.floor(colours.length * Math.random());
}

