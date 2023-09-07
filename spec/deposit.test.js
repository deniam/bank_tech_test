const Deposit = require('../src/deposit');

describe("Deposit test", () => {
    deposit = new Deposit(1000, '21/04/2023');

    it("contains amount value", () => {
        expect(deposit.getAmount()).toBe(1000);
    });

    it("contains date value", () => {
        expect(deposit.getDate()).toBe('21/04/2023');
    });
});