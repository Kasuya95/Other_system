
class UserAccount{
    readonly username : string 
    private password : string
    protected email :string 

    constructor( username : string ,password : string ,email :string ){
        this.username = username
        this.password = password
        this.email = email
    }

    public changePassword(oldPassword: string, newPassword: string): string {
        if (this.password === oldPassword) {
            this.password = newPassword;
            return "✅ Password changed successfully";
        } else {
            return "❌ Old password is incorrect";
        }
    }
    
    public getPassword():string{
        return this.password
    }
    public getusername():string{
        return this.username
    }
    public getEmail():string{   
        return this.email
    }
    public setPassword(newPassword: string): void {
        this.password = newPassword;
    }
}

class AdminAccount extends UserAccount{
    private role : string
    constructor(username : string ,password : string ,email :string ,role : string){
        super(username,password,email)
        this.role = role
    }
    

    public resetPassword(email: string, newPassword: string): string {
        if (this.email === email) {
            const password = this.getPassword();
            const result = this.changePassword(password, newPassword);
            if (result === "✅ Password changed successfully") {
                `รหัสผ่านคือ ${this.setPassword("")}`; 
                return "✅ Password reset successfully";  
            }
            return result;  
        } else {
            return "❌ Email is not correct";
        }
    }
    
}
export {UserAccount,AdminAccount}