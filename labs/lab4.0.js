let Bank_account_number = {
    account_number: "123456789",
    routing_number: "123",
    balance: 50000000
};

let bank_accounts = { ...Bank_account_number };
bank_accounts.account_number = "88888888";
console.log(Bank_account_number, bank_accounts);
let bank_arr = [{ ...Bank_account_number }, { ...bank_accounts }];
console.log(bank_arr);

const readline = require('readline-sync');
let find_acc = readline.question('account number: ');
find_account(find_acc);
// for (let i = 0; i < bank_arr.length; i++) {
//     if (find_acc === bank_arr[i].account_number) {
//         console.log(`Account is existing: ${bank_arr[i].account_number}, and balance: ${bank_arr[i].balance}`) 
//         let withdraw_number = Number(readline.question('balance: '));
//         if (withdraw_number <= bank_arr[i].balance){
//             console.log('Withdrawal request submitted')
//         } else {
//             console.log('Exceed the allowable limit')
//         }
//     }
// }
function find_account(find_acc) {
    for (let i = 0; i < bank_arr.length; i++) {
        if (find_acc === bank_arr[i].account_number) {
            console.log(`Account is existing: ${bank_arr[i].account_number}, and balance: ${bank_arr[i].balance}`)
            let withdraw_number = Number(readline.question('balance: '));
            withdraw(withdraw_number, bank_arr[i].balance);
        } else{
            console.log('Account number is not existing');
        }


    }
}
function withdraw(withdraw_number, balance) {
    if (withdraw_number <= balance) {
        console.log('Withdrawal request submitted')
    } else {
        console.log('Exceed the allowable limit')
    }
}
