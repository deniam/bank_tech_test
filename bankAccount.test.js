const BankAccount = require('./bankAccount');

describe("BankAccount", () => {
    const bankAccount = new BankAccount();

    it("has default balance", () => {
        expect(bankAccount.checkBalance()).toBe(0);
    });

    it("client makes a deposit of 1000 and balance increased on this value", () => {
        bankAccount.makeDeposit(1000, '05/08/2023');
        expect(bankAccount.checkBalance()).toBe(1000);
    });

    it("client makes a deposit of 2000 and balance increased on this value", () => {
        bankAccount.makeDeposit(2000, '12/08/2023');
        expect(bankAccount.checkBalance()).toBe(3000);
    });

    it("date and amount of deposit recorded to the transactions", () => {
        expect(bankAccount.checkTransactions()).toEqual([
            {date: '05/08/2023', credit: 1000, debit: '', balance: 1000},
            {date: '12/08/2023', credit: 2000, debit: '', balance: 3000}
    ]);
    });
    
    it("client make a withdrawal of 500 and balance discreased on this value", () => {
        bankAccount.makeWithdrawal(2000, '10/08/2023');
        expect(bankAccount.checkBalance()).toBe(1000);
    })

});