var r = Math.random();
//document.write(r);

var url = "/page";
url += '?r=' + r;
//document.write(url);


var min = 2, max = 7;

for (var i = 0; i < 20; i++) {
  document.write(randomInt(min, max), ' ');
}

function randomInt(min, max) {
   return Math.round(min + (max - min) * Math.random());
}

