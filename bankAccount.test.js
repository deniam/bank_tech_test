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
});