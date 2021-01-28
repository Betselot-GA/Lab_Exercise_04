
 (function(){
    let result;

    // take the operator input
    const operator = prompt('Enter operator ( either +, -, *  /,avg for average,max for maximum, min for minimum): ');
    
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
        case 'avg':
            console.log(average());
        case 'max':
            console.log(max());
        case 'min':
            console.log(min());    
        default:
            console.log('Invalid operator');
            break;
    }
})();

  

function add(){
    var numbers = new Array();
    var sum = 0  
    var size = parseInt(prompt("How many numbers do you want to add?"));
    for(var i=0;i<size;i++){
        numbers[i] =  prompt("Enter a number: ");
    }  
    for(var j=0;j<size;j++){
        sum += parseInt(numbers[j]);
    }
    return sum;
}

function average(){
    var numbers = new Array();
    var sum = 0  
    var size = parseInt(prompt("How many numbers do you want to add?"));
    for(var i=0;i<size;i++){
        numbers[i] =  prompt("Enter a number: ");
    }  
    for(var j=0;j<size;j++){
        sum += parseInt(numbers[j]);
    }
    return sum/numbers.length;
}

function max(){
    var numbers = new Array();
    var max = 0  
    var size = parseInt(prompt("How many numbers do you want to compare?"));
    for(var i=0;i<size;i++){
        numbers[i] =  prompt("Enter a number: ");
    }  
    for(var j=0;j<size;j++){
        if(numbers[j]>numbers[j++]){
            max = numbers[j]
        }else{
            max = numbers[j++]
        }
    }
    return max;
}

function min(){
    var list = new Array();
    var min = 0  
    var size = parseInt(prompt("How many numbers do you want to compare?"));
    for(var i=0;i<size;i++){
        list[i] =  prompt("Enter a number: ");
    }  
  min = Math.min.apply(Math,list);
    return min;
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


