import { BankAccount } from "./BankSystem";
import { SavingAccount } from "./BankSystem";

const ac1 = new BankAccount('a1', 1000, 'top')
ac1.deposit(10000)
//ac1.withdraw(1)
//console.log(ac1.toString())  

const isrest1 = new SavingAccount(ac1.getaccontNumber(), ac1.getBalance(), ac1.getownerName(), 0.25)
isrest1.setInterestRate(0.25)  

const interest = isrest1.calcTotal(isrest1.getInterestRate(), 365)
console.log(isrest1.toString()+` จำนวนดอกเบี้ยที่ได้ 365 วัน : ${interest} บาท`)

console.log('#############################################')
import { UserAccount } from "./AccountSystem";
import { AdminAccount } from "./AccountSystem";


const user1 = new UserAccount('Boom', 'pass1', 'Test@gmail.com')
console.log(user1.changePassword('pass1', 'pass3'))
console.log(user1.getPassword())

const admin1 = new AdminAccount(user1.getusername(), user1.getPassword(), 'Test@gmail.com', 'Admin')
const resultresetPassword = admin1.resetPassword('Test@gmail.com', 'pass3')
console.log(resultresetPassword)
console.log(`รหัสผ่านคือ " ${admin1.getPassword()} "`)

console.log('#############################################')

import { Product } from "./ProductStorageSystem";
import { DiscountedProduct } from "./ProductStorageSystem";

const product1 = new Product(1, 'IPONE 14', 21700)
console.log(product1.toString())
const discount = new DiscountedProduct(product1)
discount.addDiscount(10)

console.log('#############################################')
import { Car } from "./CarSystem";
const car1 = new Car('Toyota', 0)
car1.accelerate(30)
car1.brake(10) 
console.log(car1.toString())
