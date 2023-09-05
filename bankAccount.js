class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }
    
    checkBalance() {
        return this.balance;
    }

    makeDeposit(amount, date) {
        this.balance += amount;
        this.transactions.push( {date: date, credit: amount, debit: '', balance: this.balance});
    }

    makeWithdrawal(amount, date) {
        this.balance -= amount;
        this.transactions.push( {date: date, credit: '', debit: amount, balance: this.balance});
    }
    checkTransactions() {
        return this.transactions;
    }
}

module.exports = BankAccount;