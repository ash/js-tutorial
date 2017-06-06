for (var c = 0; c < 10; c++) {
  var ending = 
      c == 1 ? 'st' : 
      c == 2 ? 'nd' :
      c == 3 ? 'rd' :
               'th' ;
  
  document.write(c + '<sup>' + ending + '</sup><br/>');
}

