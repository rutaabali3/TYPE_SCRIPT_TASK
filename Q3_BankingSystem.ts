class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than zero.");
      return;
    }

    this.balance += amount;
    console.log(`Rs. ${amount} deposited successfully.`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
      return;
    }

    if (amount > this.balance) {
      console.log("Insufficient balance. Withdrawal failed.");
      return;
    }

    this.balance -= amount;
    console.log(`Rs. ${amount} withdrawn successfully.`);
  }

  checkBalance(): void {
    console.log(`Current Balance: Rs. ${this.balance}`);
  }
}

const account = new BankAccount(10000);

account.checkBalance();
account.deposit(5000);
account.checkBalance();
account.withdraw(3000);
account.checkBalance();
account.withdraw(15000);
account.checkBalance();
