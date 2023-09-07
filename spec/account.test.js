const Account = require('../src/account.js');

describe("Testing operations woth bank account", () => {
    const account = new Account();

    it("has default balance", () => {
        expect(account.checkBalance()).toBe(0);
    });

    it("returns transactions", () => {
        expect(account.checkTransactions()).toStrictEqual([]);
    });
});