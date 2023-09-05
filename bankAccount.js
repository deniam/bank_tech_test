class BankAccount {
    constructor() {
        this.balance = 0;
    }
    
    checkBalance() {
        return this.balance;
    }
    makeDeposit(amount, date) {
        this.balance += amount;
    }
}

module.exports = BankAccount;