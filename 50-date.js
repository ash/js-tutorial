var d = new Date();

document.write(d);
document.write('<br>');
document.write(typeof d, '<br>');

document.write(d.getFullYear(), '<br>');
document.write(d.getMonth(), '<br>'); // starts with 0
document.write(d.getDate(), '<br>'); // starts with 1

var months = ['January', 'February', 'March',
              'April', 'May', 'June', 'July',
              'August', 'October', 'November', 'December'];
document.write(months[d.getMonth()]);



