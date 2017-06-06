<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <input id="a" />
  <input id="b" />
  
  <p id="buttons"></p>
  <p id="result"></p>
  
  <script>
    var a, b;
    
    var fs = {
      '+': function(a, b) {return a + b}, 
      '−': function(a, b) {return a - b},
      '×': function(a, b) {return a * b},
      '÷': function(a, b) {return a / b},
      '%': function(a, b) {return a % b},
    };
    
    var buttons = document.getElementById('buttons');
    for (var op in fs) {
      buttons.innerHTML += 
        '<button onclick="f(this)">' + op + '</button>';
    }
    
    function f(button) {
      read_data();      

      var op = button.innerHTML;
      print_result(fs[op](a, b), op);
    }
    
    function read_data() {
      a = parseInt(document.getElementById('a').value);
      b = parseInt(document.getElementById('b').value);
    }
    
    function print_result(result, operator) {
      result = result.toString().replace('-', '&minus;');
      document.getElementById('result').innerHTML = 
        a + '&thinsp;' + operator + '&thinsp;' +
        b + '&thinsp;=&thinsp;' + result;
    }
  </script>
</body>
</html>