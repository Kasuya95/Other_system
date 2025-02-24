"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, balance, ownerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Amount to withdraw must be greater than 0");
        }
        else if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Successfully withdrew ${amount}. New balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient balance for withdrawal");
        }
    }
    getBalance() {
        return this.balance;
    }
    getownerName() {
        return this.ownerName;
    }
    getaccontNumber() {
        return this.accountNumber;
    }
    toString() {
        return `AccountNumber: ${this.accountNumber}  Balance: ${this.balance}  OwnerName: ${this.ownerName}`;
    }
}
exports.BankAccount = BankAccount;
class SavingAccount extends BankAccount {
    constructor(accountNumber, balance, ownerName, interestRate) {
        super(accountNumber, balance, ownerName);
        this.interestRate = interestRate;
    }
    getInterestRate() {
        return this.interestRate;
    }
    setInterestRate(interestRate) {
        this.interestRate = interestRate;
    }
    calcTotal(interestRate, days) {
        const totalInterest = (this.getBalance() * interestRate * days) / 365;
        return totalInterest;
    }
    toString() {
        return `${super.toString()} Interest Rate: ${this.interestRate}%`;
    }
}
exports.SavingAccount = SavingAccount;
