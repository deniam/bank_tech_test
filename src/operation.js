class Operation {
    constructor(account) {
        this.account = account;
    }

    makeTransaction(transaction) {
        const transactionAmount = transaction.getAmount();
        const transactionDate = transaction.getDate();
        const transactionType = transaction.getType();
        let accountTransactions = this.account.transactions;
        if (transactionType === "deposit") {
            this.account.balance += transactionAmount;
        accountTransactions.push( {date: transactionDate, credit: transactionAmount, debit: '', balance: this.account.balance});
        } else if (transactionType === "withdrawal") {
            if (transactionAmount <= this.account.balance) {
                this.account.balance -= transactionAmount;
                accountTransactions.push( {date: transactionDate, credit: '', debit: transactionAmount, balance: this.account.balance});
            } else {
                console.log("Not enough funds");
            };
        } else {
            throw "Invalid type of transaction";
        }
    }
};

module.exports = Operation;