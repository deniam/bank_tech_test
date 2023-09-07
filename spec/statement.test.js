const Statement = require('../src/statement');
const Operation = require('../src/operation');
const Deposit = require('../src/deposit');
const Withdrawal = require('../src/withdrawal');
const Account = require('../src/account.js');

describe("test statement", () => {
    const account = new Account(0, []);
        const deposit1 = new Deposit(1000, '05/08/2023');
        const deposit2 = new Deposit(2000, '12/08/2023');
        const withdrawal = new Withdrawal(500, '15/08/2023');
        const operation = new Operation(account);
        const statement = new Statement();

        operation.makeDeposit(deposit1);
        operation.makeDeposit(deposit2);
        operation.makeWithdrawal(withdrawal);
        
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
        expect(consoleSpy).toHaveBeenCalledWith("15/08/2023 ||  || 500 || 2500.00");
        expect(consoleSpy).toHaveBeenCalledWith("12/08/2023 || 2000 ||  || 3000.00");
        expect(consoleSpy).toHaveBeenCalledWith("05/08/2023 || 1000 ||  || 1000.00");
        
    });
});