const int_arr = [12, 34, 1, 16, 28];
for(let i = 0; i < int_arr.length; i++){
    for(let j = 0; j < int_arr.length; j++){
        if(int_arr[j] > int_arr[j + 1]){
            let temp = int_arr[j];
            int_arr[j] = int_arr[j + 1];
            int_arr[j + 1] = temp;
        }
    }
}
console.log(int_arr);