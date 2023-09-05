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
        this.transactions.push( {date: date, credit: amount.toFixed(2), debit: '', balance: this.balance});
    }

    makeWithdrawal(amount, date) {
        this.balance -= amount;
        this.transactions.push( {date: date, credit: '', debit: amount.toFixed(2), balance: this.balance});
    }
    checkTransactions() {
        return this.transactions;
    }

    printStatement() {
        console.log("date || credit || debit || balance");
        this.transactions.forEach(transaction => {
        console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance.toFixed(2)}`)
    })
}
}

module.exports = BankAccount;

const account = new BankAccount();
account.makeDeposit(1000, '10/01/2023');
account.makeDeposit(2000, '13/01/2023');
account.makeWithdrawal(500, '14/01/2023');
account.printStatement();