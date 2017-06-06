
outer_loop: // label
for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 10; y++) {
    //if (y == 4) break;
    //if (y == 4) continue outer_loop;
    if (y == 4) break outer_loop;

    document.write(x + ', ' + y + '<br>');
  }
}

