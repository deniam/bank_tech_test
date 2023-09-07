class Deposit {
    constructor (amount, date) {
        this.amount = amount;
        this.date = date;
    }

    getAmount() { 
        return this.amount;
    }

    getDate() {
        return this.date;
    }
};

module.exports = Deposit;