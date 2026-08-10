class BankAccount {
    name;
    balance;
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        this.balance = this.balance - amount;
    }
    displayBalance() {
        console.log("Balance = " + this.balance);
    }
}
let acc = new BankAccount("Sudhipthi", 5000);
acc.deposit(1000);
acc.withdraw(500);
acc.displayBalance();
export {};
