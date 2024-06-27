const readline = require ('readline-sync');
let number = Number(readline.question('Your number: '));
let odd_number = Math.floor(number * 100)/100;
console.log(odd_number);
let even_number = Math.floor(number);
console.log(even_number);

