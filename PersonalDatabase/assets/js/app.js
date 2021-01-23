//declaring variables
var firstName;
var lastName;
var age;
var job;

//receiving inforamtion
firstName = prompt("enter your first name ");
lastName = prompt("enter your last name ");
age = prompt("enter your age ");
job = prompt("enter your profession ");

//displaying information
console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");

let eligibleToVote;
let tempAge;

tempAge = Number(age);

if(tempAge >= 18){
    eligibleToVote = true;
}else{
    eligibleToVote = false;
}

console.log("eligible to vote: "+eligibleToVote);


let familyMembers = new Array();
let numberOfFamily;

numberOfFamily = parseInt(prompt("how many number of family do you have? "));

for(var i=0;i<numberOfFamily;i++){
    familyMembers[i] = prompt("add your family..."+(i+1));
}

console.log("family members");

familyMembers.forEach(function(family){
    console.log("family member "+family);
});


var birthYear;


birthYear = prompt("Enter your birth year.");


function ageCalc(birthYear){
    return new Date().getFullYear - birthYear ;
}

let tempAge = ageCalc(birthYear);
console.log("Age "+tempAge+" years old");

var weight;
var height;

weight = Number(prompt("Enter your weight"));
height = Number(prompt("Enter your height"));

function calcBmi(weight, height){
    return weight/Math.pow(height,2);
}

var answer = calcBmi(weight, height)
console.log("your bmi value is "+ answer);

if(answer < 18.5){
    console.log("You are underweight");
}else if(answer <= 24.9){
    console.log("You have normal weight");
}else if(answer <= 29.9){
    console.log("You are overweight");
}else{
    console.log("you are obese");
}

(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    // call to bmi calculator 
    calcBmi(weight, height);
})();

