let int_arr = [1, 2, 3, 4, 5];
console.log(int_arr[1]);
for(let i = 0; i< int_arr.length; i++){
    // console.log(`index: ${i}`, `value: ${int_arr[i]%2}`);
    if (int_arr[i] %2 == 0){
        console.log(`even number: ${int_arr[i]}`);
    } else {
        console.log(`odd number: ${int_arr[i]}`);
    }
        
}