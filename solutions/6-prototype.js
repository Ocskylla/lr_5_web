// BEGIN
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

const conversionRates = {
    usd:{eur: 0.7},
    eur:{usd:1.2}
};

Money.prototype.getValue = function() {
    return this.value;
};
Money.prototype.getCurrency = function() {
    return this.currency;
};
Money.prototype.exchangeTo = function(newCurrency) {
    if (this.currency === newCurrency) {
        return new Money(this.value, this.currency);
    }

    let rate = conversionRates[this.currency][newCurrency];
    let newValue = this.value*rate;
    return new Money(newValue, newCurrency);
};

Money.prototype.add = function(money) {
    if(this.currency === money.getCurrency()) {
        return new Money(this.value + money.getValue(), this.currency);
    }
    let converted = money.exchangeTo(this.currency);
    return  new Money(this.value + converted.getValue(), this.currency);
};

Money.prototype.format = function () {
    const currency = this.currency;
    return this.value.toLocaleString(undefined, { style: 'currency', currency: currency });
};

export default Money;
// END
