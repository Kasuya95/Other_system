class BankAccount{
    readonly username : string 
    private password : string
    protected email :string 

    constructor( username : string ,password : string ,email :string ){
        this.username = username
        this.password = password
        this.email = email
    }

    public changePassword(oldPassword:string,newPassword:string):void{
        this
    }
}