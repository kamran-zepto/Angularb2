type BankAccount = {money : number,deposit : (value :number) =>void};
let bankAccount : BankAccount = {
    money :2000,
    deposit(value:number):void {
        this.money += value;
    }
}
 let mySelf : {name : string,bankAccount :BankAccount,hobbies :string[] } = {
     name : 'John',
     bankAccount :bankAccount,
     hobbies:['sports','cooking','modeling']
 }