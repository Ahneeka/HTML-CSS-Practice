class Account{
    constructor(firstName, lastName, age, gender){
        this.firstName = firstName || "Saheed";
        this.lastName = lastName || "Chinwoke"
        this.age = age;
        this.balance = this.balance
    }
    setFirstName(firstName){
        this.firstName = firstName
    }
    getFirstName(){
        return this.firstName;
    }

}


class BankAccount extends Account{
    constructor(firstName, lastName, age, balance,accountNumber){
        super(firstName, lastName, age, gender);
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    getBalance(){
        return this.balance
    }
    setBalance(balance){
        this.balance = balance;
    }
}

let myAccount = new BankAccount();
console.log(acct.setFirstName("Ahneeka"))