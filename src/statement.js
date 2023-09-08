class Statement {
    
    printStatement(account) {
        const reversedTransactions = account.checkTransactions().reverse();
        console.log("date || credit || debit || balance");
        reversedTransactions.forEach(transaction => {
        console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance.toFixed(2)}`)
        });
    };
};

module.exports = Statement;