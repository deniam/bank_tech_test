class Withdrawal {
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

module.exports = Withdrawal;