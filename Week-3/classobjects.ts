class BankAccount {
    public accountHolder: string;
    public balance: number;
    public accountType: string;
    public branch: string;

    // Constructor Overloading
    constructor(name: string, balance: number);
    constructor(name: string, balance: number, type: string, branch: string);

    constructor(name: string, balance: number, type?: string, branch?: string) {
        this.accountHolder = name;
        this.balance = balance;
        this.accountType = type ?? "Savings";
        this.branch = branch ?? "Main Branch";
    }

    // Method to calculate yearly bonus
    public calculateBonus(): number {
        return this.balance * 0.02;
    }

    // Display Account Details
    public displayDetails(): void {
        console.log("------ Bank Account ------");
        console.log(`Account Holder : ${this.accountHolder}`);
        console.log(`Balance        : ₹${this.balance}`);
        console.log(`Account Type   : ${this.accountType}`);
        console.log(`Branch         : ${this.branch}`);
        console.log(`Yearly Bonus   : ₹${this.calculateBonus()}`);
        console.log("--------------------------\n");
    }
}

// Object 1
const account1 = new BankAccount("Sudhipthi", 50000);

// Object 2
const account2 = new BankAccount("Varsha", 120000, "Current", "Vijayawada");

// Display Details
account1.displayDetails();
account2.displayDetails();

// Update Balance
account2.balance = 150000;

console.log(`Updated Bonus for ${account2.accountHolder}: ₹${account2.calculateBonus()}`);