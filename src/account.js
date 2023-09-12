class Account {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    checkBalance() {
        return this.balance;
    }

    checkTransactions() {
        return this.transactions;
    }

    makeTransaction(transaction) {
        const transactionAmount = transaction.getAmount();
        const transactionDate = transaction.getDate();
        const transactionType = transaction.getType();
        if (transactionType === "deposit") {
            this.balance += transactionAmount;
        this.transactions.push( {date: transactionDate, credit: transactionAmount, debit: '', balance: this.balance});
        } else if (transactionType === "withdrawal") {
            if (transactionAmount <= this.balance) {
                this.balance -= transactionAmount;
                this.transactions.push( {date: transactionDate, credit: '', debit: transactionAmount, balance: this.balance});
            } else {
                console.log("Not enough funds");
            };
        } else {
            throw "Invalid type of transaction";
        }
    }
};

module.exports = Account;