const Account = require('../src/account');
const Transaction = require('../src/transaction');

describe("Testing operations woth bank account", () => {
    const account = new Account();

    it("has default balance", () => {
        expect(account.checkBalance()).toBe(0);
    });

    it("returns transactions", () => {
        expect(account.checkTransactions()).toStrictEqual([]);
    });
});

describe("Testing accounts with bank account", () => {
    const account = new Account();

    it("client makes a deposit of 1000 and balance increased on this value", () => {
        const transaction = new Transaction(1000, '05/08/2023', 'deposit');
        account.makeTransaction(transaction);
        expect(account.checkBalance()).toEqual(1000);
    });

    it("deposit with correct data has been recorded to transactions", () => {
        expect(account.checkTransactions()).toEqual([
            {date: '05/08/2023', credit: 1000, debit: '', balance: 1000}
        ])
    })

    it("client makes a deposit of 2000 and balance increased on this value", () => {
        const transaction = new Transaction(2000, '12/08/2023', 'deposit');
        account.makeTransaction(transaction);
        expect(account.checkBalance()).toBe(3000);
    });

    it("date and amount of deposit recorded to the transactions", () => {
        expect(account.checkTransactions()).toEqual([
            {date: '05/08/2023', credit: 1000, debit: '', balance: 1000},
            {date: '12/08/2023', credit: 2000, debit: '', balance: 3000}
        ]);
    });
    
    it("client make a withdrawal of 500 and balance discreased on this value", () => {
        const transaction = new Transaction(500, '15/08/2023', 'withdrawal');
        account.makeTransaction(transaction);
        expect(account.checkBalance()).toBe(2500);
    });

    it("client make a withdrawal of 5000 and get error message because of low balance", () => {
        const transaction = new Transaction(5000, '15/08/2023', 'withdrawal');
        account.makeTransaction(transaction);
        expect(account.checkBalance()).toBe(2500);
    });

    it("date and amount of withdrawal recorded to the transactions", () => {
        expect(account.checkTransactions()).toEqual([
            {date: '05/08/2023', credit: 1000, debit: '', balance: 1000},
            {date: '12/08/2023', credit: 2000, debit: '', balance: 3000},
            {date: '15/08/2023', credit: '', debit: 500, balance: 2500}
            ]);
    });
});
describe("Acceptance criteria", () => {
    const account = new Account();
    const transaction1 = new Transaction(1000, '05/08/2023', 'deposit');
    const transaction2 = new Transaction(2000, '12/08/2023', 'deposit');
    const transaction3 = new Transaction(500, '15/08/2023', 'withdrawal');

    it("tests", () => {
        expect(account.checkBalance()).toBe(0);
        account.makeTransaction(transaction1);
        account.makeTransaction(transaction2);
        account.makeTransaction(transaction3);
        expect(account.checkTransactions()).toEqual([
            {date: '05/08/2023', credit: 1000, debit: '', balance: 1000},
            {date: '12/08/2023', credit: 2000, debit: '', balance: 3000},
            {date: '15/08/2023', credit: '', debit: 500, balance: 2500}
            ]);
    });
});
