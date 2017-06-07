var str = 'mail@domain.com';

var r = str.search(/@(\w+\.\w+)/);
//document.write(r);

var res = str.replace(/mail/g, 'X');
//document.write(res);

var d = /^(\w+)@(\w+\.\w+)$/.exec(str);
//document.write(d);
document.write('email=' + d[0] + '<br>');
document.write('name=' + d[1] + '<br>');
document.write('domein=' + d[2] + '<br>');
