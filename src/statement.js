class Statement {
    
    printStatement(account) {
        const reversedTransactions = account.checkTransactions().reverse();
        console.log("date || credit || debit || balance");
        reversedTransactions.forEach(transaction => {
            let credit = transaction.credit != "" ? transaction.credit.toFixed(2) : transaction.credit;
            let debit = transaction.debit != "" ? transaction.debit.toFixed(2) : transaction.debit;
        console.log(`${transaction.date} || ${credit} || ${debit} || ${transaction.balance.toFixed(2)}`)
        });
    };
};

module.exports = Statement;