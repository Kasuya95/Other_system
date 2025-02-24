class BankAccount {
    readonly accountNumber: string
    private balance: number
    protected ownerName: string

    constructor(accountNumber: string, balance: number, ownerName: string) {
        this.accountNumber = accountNumber
        this.balance = balance
        this.ownerName = ownerName
    }

    public deposit(amount: number): void {
        this.balance += amount
    }


    public withdraw(amount: number): void {

        if (amount <= 0) {
            console.log("Amount to withdraw must be greater than 0");
        } else if (this.balance >= amount) {
            this.balance -= amount
            console.log(`Successfully withdrew ${amount}. New balance: ${this.balance}`)
        } else {
            console.log("Insufficient balance for withdrawal");
        }
    }

    public getBalance(): number {
        return this.balance
    }
    public getownerName(): string {
        return this.ownerName
    }

    public getaccontNumber(): string {
        return this.accountNumber
    }

    public toString(): string {
        return `AccountNumber: ${this.accountNumber}  Balance: ${this.balance}  OwnerName: ${this.ownerName}`
    }
}



class SavingAccount extends BankAccount {
    private interestRate: number
    
    constructor(accountNumber: string, balance: number, ownerName: string, interestRate: number) {
        super(accountNumber, balance, ownerName);
        this.interestRate = interestRate
    }


    public getInterestRate(): number {
        return this.interestRate
    }

  
    public setInterestRate(interestRate: number): void {
        this.interestRate = interestRate
    }


    public calcTotal(interestRate: number, days: number): number {
        const totalInterest = (this.getBalance() * interestRate * days) / 365
        return totalInterest
    }

   
    public toString(): string {
        return `${super.toString()} Interest Rate: ${this.interestRate}%`
    }
}

export{BankAccount,SavingAccount}