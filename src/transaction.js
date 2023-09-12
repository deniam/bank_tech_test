class Transaction {
    constructor (amount, date, type) {
        this.amount = amount;
        this.date = date;
        this.type = type;
    }

    getAmount() { 
        return this.amount;
    }

    getDate() {
        return this.date;
    }

    getType() {
        return this.type;
    }
};

module.exports = Transaction;