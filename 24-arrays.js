// var person1 = 'Jack';
// var person2 = 'John';
// var person3 = 'Margot';

// document.write('Person 1\'s name is ' + person1 + '<br>');
// document.write('Person 2\'s name is ' + person2 + '<br>');
// document.write('Person 3\'s name is ' + person3 + '<br>');

var people = ['Jack', 'John', 'Margot'];

//document.write(people);

// document.write(people[0]); // index
// document.write(people[1]);
// document.write(people[2]);

people[1] = 'Josh';
//document.write(people);

//document.write(people.length);

people[people.length] = 'Jaqueline';
// document.write(people);
// document.write(people.length);

//document.write(people[10]);
people[10] = 'Name';
//document.write(people);

var array2 = [10, 20, , , , , 100];
document.write(array2); // sparse array
