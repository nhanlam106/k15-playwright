const readline = require('readline-sync');
const BMI_MIN = 18.5;
const BMI_MAX = 24.9;
let height = Number(readline.question('Your height: '));
let weight = Number(readline.question('Your weight: '));
let BMI = calculateBMI(weight, height);
if (BMI <= 18.5) {
    console.log('Underweight');
    let weight_standard = calculateWeight(BMI_MIN, height);
    console.log('You need to increase:' + Math.round(weight_standard - weight));
} else if (BMI <= 24.9) {
    console.log('Normal weight!');
} else if (BMI <= 29.9) {
    console.log('Overweight!');
    let weight_standard = calculateWeight(BMI_MAX, height);
    console.log('You need to decrease:' + Math.round(weight - weight_standard));
} else {
    console.log('Obesity');
    let weight_standard = calculateWeight(BMI_MAX, height);
    console.log('You need to decrease:' + Math.round(weight - weight_standard));
}

function calculateBMI(weight, height) {
    let BMI = weight / (height * height);
    console.log(BMI);
    return BMI;

}
function calculateWeight(BMI_standard, height) {
    let weight_standard = BMI_standard * (height * height);
    return weight_standard;
}