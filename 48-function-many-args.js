function add_up(a, b) {
  return a + b;
}

function add_many() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++)
     sum += arguments[i];

  return sum;  
}


document.write(add_up(7, 8));
document.write('<br>', '<hr>');

document.write(add_many(7, 8, 9, 10, 11));



