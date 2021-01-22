// program for a simple banking system
var currentBalance1 = parseInt(100);
var currentBalance2 = parseInt(200);

var depositedAmount;
var transferAmount;
var withdrawalAmount;
  
(function(){

    var loop = parseInt(prompt("choose 0 to quit or 1 to continue"));
    while(loop){
    // take the choice input
    const choice = prompt('Enter your choice ( deposit, withdraw,balance  or transfer ): ');
    var loop = parseInt(prompt("choose 0 to quit or 1 to continue"));
    // take the choice input

    switch(choice) {
        case 'deposit':
            console.log(deposit());
            break;

        case 'withdraw':
            console.log(withdraw());
            break;

        case 'transfer':
            console.log(transfer());
            break;

        case 'balance':
            console.log(balance());
            break;

        default:
            console.log('Invalid choice');
            break;
}
    }
    
})();

function deposit(){
    let account = parseInt(prompt("choose your 1 for account 1 and 2 for account 2"));
    if(account == 1){
        depositedAmount = parseInt(prompt("How much do you want to deposit?"));
        var accountNumber = parseInt(prompt("Enter your account number: "));
        var name = prompt("Enter your name: ");
        console.log("You deposited: " + depositedAmount + " birr to Account No. "+ accountNumber + ".");
        currentBalance1 += depositedAmount;
    }else if(account == 2){
        depositedAmount = parseInt(prompt("How much do you want to deposit?"));
        var accountNumber = parseInt(prompt("Enter your account number: "));
        var name = prompt("Enter your name: ");
        console.log("You deposited: " + depositedAmount + " birr to Account No. "+ accountNumber + ".");
        currentBalance2 += depositedAmount;
    }else{
        console.log("enter a valid account");
    }
    
}

function balance(){
    let account = parseInt(prompt("choose your 1 for account1 and 2 for account2"));
    if(account==1){
        console.log("Account1: Your balance is now: ");
        return currentBalance1;    
    }else if(account == 2){
        console.log("Account2: Your current balance is now: ");
        return currentBalance2;
    }else{
        console.log("enter a valid account");
    }
      
}

function withdraw(){
    let account = parseInt(prompt("choose your 1 for account1 and 2 for account2"));
    if(account==1){
    withdrawalAmount = parseInt(prompt("How much do you want to withdraw? "));
    currentBalance1 -= withdrawalAmount
    if(withdrawalAmount >= currentBalance1 || withdrawalAmount >= 100000){
       console.log("You do not have enough money to withdraw"); 
    }else{    
        console.log("you are left with "+ currentBalance1 + " birr.");
    }
}else if(account==2){
    withdrawalAmount = parseInt(prompt("How much do you want to withdraw? "));
    currentBalance2 -= withdrawalAmount
    if(withdrawalAmount >= currentBalance2 || withdrawalAmount >= 100000){
       console.log("You do not have enough money to withdraw"); 
    }else if(account==2){    
        console.log("you are left with "+ currentBalance1 + " birr.");
    }else{
        console.log("enter a valid account number");
    }
}
}

function transfer(){
    let account = parseInt(prompt("choose your 1 for account1 and 2 for account2"));
    if(account==1){
        transferAmount = parseInt(prompt("Enter the amount you want to transfer: "));
        currentBalance1 -= transferAmount;
        currentBalance2 += transferAmount;
        console.log("You transfered: " + transferAmount + " birr to  account2 .");

    }else if(account==2){
        transferAmount = parseInt(prompt("Enter the amount you want to transfer: "));
        currentBalance2 -= transferAmount;
        currentBalance1 += transferAmount
        console.log("You transfered: " + transferAmount + " birr to account1.");

    }else{
        console.log("enter a valid account");
    }
}



