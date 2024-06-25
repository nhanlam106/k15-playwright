const readline = require('readline-sync');
let client_age = Number(readline.question('Your age: '));
if (client_age < 18) {
    console.log('khong ban');
} else if (client_age >= 18 && client_age <= 55) {
    console.log('Unlimited!');
} else {
    console.log('2 chai');

}