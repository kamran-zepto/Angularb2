let bankAccount = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
}

let mySelf = {
    name : 'John',
    bankAccount :bankAccount,
    hobbies:['sports','cooking','modeling']
}

mySelf.bankAccount.deposit(3000);
console.log(mySelf)