let int_arr = [1, 2, 3, 4, 5];
let min = int_arr[0];
let max = int_arr[0];
for (let i = 0; i < int_arr.length; i++) {
    if (int_arr[i] < min) {
        min = int_arr[i];
    }
    if (int_arr[i]> max){
        max = int_arr[i];
    }
}
console.log(`min number: ${min}` );
console.log(`max number: ${max}` );
