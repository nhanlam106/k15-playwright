
const calculateWeight = function(BMI_standard, height) {
    let weight_standard = BMI_standard * (height * height);
    return weight_standard;
}

// export
module.exports = {calculateWeight};