class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`$${amount} deposited into the account ${this.accountNumber}`);
        } else {
            console.log("Please enter a positive amount to deposit.");
        }
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`$${amount} withdrawn from the account ${this.accountNumber}`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    getBalance() {
        return this.balance;
    }


    displayAccountInfo() {
        console.log(`Initial Account Information\n`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}\n`);
        console.log("Deposit & Withdraw: -\n");
    }

    displayUpdatedInfo() {
        console.log(`Update Account Information :-\n`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Current Balance: $${this.balance}\n`);
    }
}

// Creating instances of BankAccount
const account1 = new BankAccount(100000013, "Md MAhmudul Hasan", 12500);
const account2 = new BankAccount(100000012, "Hasan Mahmud", 3500);

// Demonstrating the functionality for account1
account1.displayAccountInfo();
account1.deposit(2500);
account1.withdraw(500);
account1.displayUpdatedInfo();

// Demonstrating the functionality for account2
account2.displayAccountInfo();
account2.deposit(1000);
account2.withdraw(300); 
account2.displayUpdatedInfo();

