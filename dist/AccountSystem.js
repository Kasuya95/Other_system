"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccount = exports.UserAccount = void 0;
class UserAccount {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password = newPassword;
            return "✅ Password changed successfully";
        }
        else {
            return "❌ Old password is incorrect";
        }
    }
    getPassword() {
        return this.password;
    }
    getusername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    setPassword(newPassword) {
        this.password = newPassword;
    }
}
exports.UserAccount = UserAccount;
class AdminAccount extends UserAccount {
    constructor(username, password, email, role) {
        super(username, password, email);
        this.role = role;
    }
    resetPassword(email, newPassword) {
        if (this.email === email) {
            const password = this.getPassword();
            const result = this.changePassword(password, newPassword);
            if (result === "✅ Password changed successfully") {
                `รหัสผ่านคือ ${this.setPassword("")}`;
                return "✅ Password reset successfully";
            }
            return result;
        }
        else {
            return "❌ Email is not correct";
        }
    }
}
exports.AdminAccount = AdminAccount;
