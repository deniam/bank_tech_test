class Operation {
    constructor(account) {
        this.account = account;
    }

    makeDeposit(deposit) {
        const depositAmount = deposit.getAmount();
        const depositDate = deposit.getDate();
        let accountTransactions = this.account.transactions;
        this.account.balance += depositAmount;
        accountTransactions.push( {date: depositDate, credit: depositAmount, debit: '', balance: this.account.balance});
    }

    makeWithdrawal(withdrawal) {
        const withdrawalAmount = withdrawal.getAmount();
        const withdrawalDate = withdrawal.getDate();
        let accountTransactions = this.account.transactions;
        if (withdrawalAmount <= this.account.balance) {
            this.account.balance -= withdrawalAmount;
            accountTransactions.push( {date: withdrawalDate, credit: '', debit: withdrawalAmount, balance: this.account.balance});
        } else {
            console.log("Not enough funds");
        };
    }
};

module.exports = Operation;