export default class Bill {
  constructor() {
    this.amounts = [];
  }

  /** @param {string} amountStr */
  addAmount(amountStr) {
    this.amounts.push(Number.parseInt(amountStr, 10));
    return this.amounts;
  }
  getCount() {
    return this.amounts.length;
  }
  getTotal() {
    return this.amounts.reduce((total, amount) => total + amount);
  }
  getAverage() {
    return this.getTotal() / this.getCount();
  }
}
