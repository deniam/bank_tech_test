const Withdrawal = require('../src/withdrawal');

describe("Withdrawal test", () => {
    withdrawal = new Withdrawal(1000, '21/04/2023');

    it("contains amount value", () => {
        expect(withdrawal.getAmount()).toBe(1000);
    });

    it("contains date value", () => {
        expect(withdrawal.getDate()).toBe('21/04/2023');
    });
});