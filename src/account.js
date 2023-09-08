class Account {
    constructor(balance, transactions) {
        this.balance = balance || 0;
        this.transactions = transactions || [];
    }

    checkBalance() {
        return this.balance;
    }

    checkTransactions() {
        return this.transactions;
    }
};

module.exports = Account;