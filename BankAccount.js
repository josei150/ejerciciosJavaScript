class BankAccount {
  constructor() {
    this.accountBalance = 0
    this.isOpen = false
  }

  open() {
    if (this.isOpen) {
      throw new ValueError()
    }
    this.isOpen = true
    this.accountBalance = 0
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError()
    }
    this.isOpen = false
  }

  deposit(amount) {
    if (!this.isOpen) {
      throw new ValueError()
    }
    if (amount < 0) {
      throw new ValueError()
    }
    this.accountBalance += amount
  }

  withdraw(amount) {
    if (!this.isOpen) {
      throw new ValueError()
    }
    if (amount < 0 || amount > this.accountBalance) {
      throw new ValueError()
    }
    this.accountBalance -= amount
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError()
    }
    return this.accountBalance
  }
}

class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}