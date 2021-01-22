// function add(){
// let numbers = []
// let sum = 0;
// let size = parseInt(prompt("How many numbers do you want to add? "));
//  for(var i=0;i<size;i++){
//     numbers[i] = parseInt(prompt("Enter your number"));
//     console.log(numbers[i]);
//  }
//  for(var j=0;j<numbers.length;j++){
//     sum = sum + numbers[i];
//  }
//  return sum;
// }
// console.log(add());

// program for a simple calculator
 
(function(){
    let result;

    // take the operator input
    const operator = prompt('Enter operator ( either +, -, * or / ): ');
    
    // take the operand input
    
    switch(operator) {
        case '+':
            console.log(add());
            break;
    
        case '-':
            console.log(sub());
            break;
    
        case '*':
            console.log(mul());
            break;
    
        case '/':
            console.log(divide());
            break;
    
        default:
            console.log('Invalid operator');
            break;
    }
})();

function add(){
    var numbers = new Array();
    var sum = 0  
    var size = parseInt(prompt("how many nymbers do you want to add?"));
    for(var i=0;i<size;i++){
        numbers[i] =  prompt("enter a number: ");
    }  
    for(var j=0;j<size;j++){
        sum += parseInt(numbers[j]);
    }
    return sum;
}

function sub(){
    var number1 = parseFloat(prompt('Enter first number: '));
    var number2 = parseFloat(prompt('Enter second number: '));   
    return number1 - number2;
}

function mul(){
    var numbers = new Array();
    var product = 1 
    var size = parseInt(prompt("how many numbers do you want to multiply?"));
    for(var i=0;i<size;i++){
        numbers[i] =  prompt("enter a number: ");
    }  
    for(var j=0;j<size;j++){
        product *= parseInt(numbers[j]);
    }
    return product;
}

function divide(){

    var number1 = parseFloat(prompt('Enter first number: '));
    var number2 = parseFloat(prompt('Enter second number: '));
    if(number2 == 0){
        console.log("change denominator");
    }else{
        return number1 / number2;
    }
    
}


