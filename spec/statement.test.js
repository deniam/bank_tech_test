const Statement = require('../src/statement');
const Transaction = require('../src/transaction');
const Account = require('../src/account.js');

describe("test statement", () => {
    const account = new Account();
    const transaction1 = new Transaction(1000, '05/08/2023', 'deposit');
    const transaction2 = new Transaction(2000, '12/08/2023', 'deposit');
    const transaction3 = new Transaction(500, '15/08/2023', 'withdrawal');
    const statement = new Statement();

    account.makeTransaction(transaction1);
    account.makeTransaction(transaction2);
    account.makeTransaction(transaction3);
        
    it("list of transactions is reversed", () => {
        const reversedTransactions = account.checkTransactions().reverse();

        expect(reversedTransactions[0].date).toEqual("15/08/2023");
        expect(reversedTransactions[1].date).toEqual("12/08/2023");
        expect(reversedTransactions[2].date).toEqual("05/08/2023");
    })

    it("prints statement", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        statement.printStatement(account);

        expect(consoleSpy).toHaveBeenCalledTimes(4);
        expect(consoleSpy).toHaveBeenCalledWith("date || credit || debit || balance");
        expect(consoleSpy).toHaveBeenCalledWith("15/08/2023 ||  || 500.00 || 2500.00");
        expect(consoleSpy).toHaveBeenCalledWith("12/08/2023 || 2000.00 ||  || 3000.00");
        expect(consoleSpy).toHaveBeenCalledWith("05/08/2023 || 1000.00 ||  || 1000.00");
        
    });
});