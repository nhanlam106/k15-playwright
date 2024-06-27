const readline = require('readline-sync');

// let my_name = readline.question('Your name: ');
// let my_age = readline.question('Your age: ');
// console.log(`${my_name}, ${my_age}`);

let arrival_time = readline.question('arrival time: ');
let is_he_on_time = (arrival_time == 7);

if (is_he_on_time) {
    console.log("Let's talk");
} else {
    console.log('Write a letter');
}