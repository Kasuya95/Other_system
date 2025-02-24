"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankSystem_1 = require("./BankSystem");
const BankSystem_2 = require("./BankSystem");
const ac1 = new BankSystem_1.BankAccount('a1', 1000, 'top');
ac1.deposit(10000);
//ac1.withdraw(1)
console.log(ac1.toString());
const isrest1 = new BankSystem_2.SavingAccount(ac1.getaccontNumber(), ac1.getBalance(), ac1.getownerName(), 0.25);
isrest1.setInterestRate(0.25);
const interest = isrest1.calcTotal(isrest1.getInterestRate(), 365);
console.log(`Interest for 365 days: ${interest}`);
