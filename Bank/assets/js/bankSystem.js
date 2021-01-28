var Bank = {
    account1: 100,
    account2: 200,
    depositedAmount: "",
    transferAmount: "",
    withdrawalAmount: "",
    account: "",
    deposit: function () {
        this.account = parseInt(prompt("choose your 1 for account 1 and 2 for account 2"));
        if (this.account == 1) {
            this.depositedAmount = parseInt(prompt("How much do you want to deposit?"));
            var accountNumber = parseInt(prompt("Enter your account number: "));
            console.log("You deposited: " + this.depositedAmount + " birr to Account No. " + accountNumber + ".");
            this.account1 += this.depositedAmount;
        } else if (this.account == 2) {
            this.depositedAmount = parseInt(prompt("How much do you want to deposit?"));
            var accountNumber = parseInt(prompt("Enter your account number: "));
            var name = prompt("Enter your name: ");
            console.log("You deposited: " + this.depositedAmount + " birr to Account No. " + accountNumber + ".");
            this.account2 += this.depositedAmount;
        } else {
            console.log("enter a valid account");
        }
    },
    withdraw: function () {
        this.account = parseInt(prompt("choose your 1 for account1 and 2 for account2"));
        if (this.account == 1) {
            this.withdrawalAmount = parseInt(prompt("How much do you want to withdraw? "));
            this.account1 -= this.withdrawalAmount
            if (this.withdrawalAmount >= this.account1 || this.withdrawalAmount >= 100000) {
                console.log("You do not have enough money to withdraw");
            } else {
                console.log("you are left with " + this.account1 + " birr.");
            }
        } else if (this.account == 2) {
            this.withdrawalAmount = parseInt(prompt("How much do you want to withdraw? "));
            this.account2 -= this.withdrawalAmount
            if (this.withdrawalAmount >= this.accoutn2 || this.withdrawalAmount >= 100000) {
                console.log("You do not have enough money to withdraw");
            } else if (this.account == 2) {
                console.log("you are left with " + this.account2 + " birr.");
            } else {
                console.log("enter a valid account number");
            }
        }
    },
    balance: function () {
        this.account = parseInt(prompt("choose your 1 for account1 and 2 for account2"));
        if (this.account == 1) {
            console.log("Account1: Your balance is now: ");
            return this.account1;
        } else if (this.account == 2) {
            console.log("Account2: Your current balance is now: ");
            return this.account2;
        } else {
            console.log("enter a valid account");
        }
    },
    transfer: function () {
        this.account = parseInt(prompt("choose your 1 for account1 and 2 for account2"));
        if (this.account == 1) {
            this.transferAmount = parseInt(prompt("Enter the amount you want to transfer: "));
            if (this.transferAmount > this.account1) {
                console.log("you dont have enough balance");
            } else {
                this.account1 -= this.transferAmount;
                account2 += transferAmount;
                console.log("You transfered: " + this.transferAmount + " birr to  account2 .");
            }
        } else if (this.account == 2) {
            this.transferAmount = parseInt(prompt("Enter the amount you want to transfer: "));
            if (this.transferAmount > this.account2) {
                console.log("you dont have enough balance");
            } else {
                this.account2 -= this.transferAmount;
                this.account1 += this.transferAmount
                console.log("You transfered: " + this.transferAmount + " birr to account1.");
            }
        } else {
            console.log("enter a valid account");
        }
    }


}

// (function(){

var loop = parseInt(prompt("choose 0 to quit or 1 to continue"));
while (loop) {
    // take the choice input
    const choice = prompt('Enter your choice ( 1 for deposit, 2 for withdraw,3 for balance  or 4 for transfer ): ');
    var loop = parseInt(prompt("choose 0 to quit or 1 to continue"));
    // take the choice input

    switch (choice) {
        case '1':
            console.log(Bank.deposit());
            break;

        case '2':
            console.log(Bank.withdraw());
            break;

        case '4':
            console.log(Bank.transfer());
            break;

        case '3':
            console.log(Bank.balance());
            break;

        default:
            console.log('Invalid choice');
            break;
    }
}

// })();