class BankAccount {

    name: string;
    balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }

    withdraw(amount: number) {
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