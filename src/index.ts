import { BankAccount } from "./BankSystem";
import { SavingAccount } from "./BankSystem";

const ac1 = new BankAccount('a1', 1000, 'top')

ac1.deposit(10000)
//ac1.withdraw(1)
console.log(ac1.toString())  

const isrest1 = new SavingAccount(ac1.getaccontNumber(), ac1.getBalance(), ac1.getownerName(), 0.25)


isrest1.setInterestRate(0.25)  


const interest = isrest1.calcTotal(isrest1.getInterestRate(), 365)
console.log(`Interest for 365 days: ${interest}`)  
