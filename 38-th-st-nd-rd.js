for (var c = 0; c != 150; c++) {
  var ending = 'th';
 
  var s = c.toString();
  var last_char   = s.substr(s.length - 1, 1);
  var last_2chars = s.substr(s.length - 2, 2);
  
  if (last_2chars != '11' && 
      last_2chars != '12' &&
      last_2chars != '13') {
    if      (last_char == '1') ending = 'st';
    else if (last_char == '2') ending = 'nd';
    else if (last_char == '3') ending = 'rd';
  }

//   else if (c == 2) ending = 'nd';
//   else if (c == 3) ending = 'rd';
//   else ending = 'th';

  document.write(c + '<sup>' + ending + '</sup><br/>');
}

