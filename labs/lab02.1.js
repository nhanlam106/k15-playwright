const readline = require('readline-sync');
let height = Number(readline.question('Your height: '));
let weight = Number(readline.question('Your weight: '));
let BMI = calculateBMI(weight, height);
if (BMI <= 18.5) {
    console.log('Underweight');
} else if (BMI <= 24.9) {
    console.log('Normal weight!');
} else if (BMI <= 29.9) {
    console.log('Overweight!');
} else {
    console.log('Obesity');
}

function calculateBMI(weight, height) {
    let BMI = weight / (height * height);
    console.log(BMI);
    return BMI;

}
