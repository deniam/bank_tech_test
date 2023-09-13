const Transaction = require('../src/transaction');

describe("Transaction test", () => {
    withdrawal = new Transaction(1000, '21/04/2023', 'withdrawal');

    it("contains amount value", () => {
        expect(withdrawal.getAmount()).toBe(1000);
    });

    it("contains date value", () => {
        expect(withdrawal.getDate()).toBe('21/04/2023');
    });

    it("contains type of operation", () => {
        expect(withdrawal.getType()).toBe('withdrawal');
    });
});