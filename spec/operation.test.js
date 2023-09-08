const Operation = require('../src/operation');
const Deposit = require('../src/deposit');
const Withdrawal = require('../src/withdrawal');
const Account = require('../src/account.js');

describe("Testing operations with bank account", () => {
    let account = new Account(0, []);
    const operation = new Operation(account);

    it("client makes a deposit of 1000 and balance increased on this value", () => {
        const deposit = new Deposit(1000, '05/08/2023');
        operation.makeDeposit(deposit);
        expect(account.checkBalance()).toEqual(1000);
    });

    it("deposit with correct data has been recorded to transactions", () => {
        expect(account.checkTransactions()).toEqual([
            {date: '05/08/2023', credit: 1000, debit: '', balance: 1000}
        ])
    })

    it("client makes a deposit of 2000 and balance increased on this value", () => {
        const deposit = new Deposit(2000, '12/08/2023');
        operation.makeDeposit(deposit);
        expect(account.checkBalance()).toBe(3000);
    });

    it("date and amount of deposit recorded to the transactions", () => {
        expect(account.checkTransactions()).toEqual([
            {date: '05/08/2023', credit: 1000, debit: '', balance: 1000},
            {date: '12/08/2023', credit: 2000, debit: '', balance: 3000}
        ]);
    });
    
    it("client make a withdrawal of 500 and balance discreased on this value", () => {
        const withdrawal = new Withdrawal(500, '15/08/2023');
        operation.makeWithdrawal(withdrawal);
        expect(account.checkBalance()).toBe(2500);
    });

    it("client make a withdrawal of 5000 and get error message because of low balance", () => {
        const withdrawal = new Withdrawal(5000, '15/08/2023');
        operation.makeWithdrawal(withdrawal);
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
    const account = new Account(0, []);
    const deposit1 = new Deposit(1000, '05/08/2023');
    const deposit2 = new Deposit(2000, '12/08/2023');
    const withdrawal = new Withdrawal(500, '15/08/2023');
    const operation = new Operation(account);

    it("tests", () => {
        expect(account.checkBalance()).toBe(0);
        operation.makeDeposit(deposit1);
        operation.makeDeposit(deposit2);
        operation.makeWithdrawal(withdrawal);
        expect(account.checkTransactions()).toEqual([
            {date: '05/08/2023', credit: 1000, debit: '', balance: 1000},
            {date: '12/08/2023', credit: 2000, debit: '', balance: 3000},
            {date: '15/08/2023', credit: '', debit: 500, balance: 2500}
            ]);
    });
});
