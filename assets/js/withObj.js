// Declaring Object +  Remove the variables and modify with the object 
let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: 0,
    height: 0,
    bmi:"",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi: function() {
        return this.weight / (this.height * this.height);
    }
    // checkBmi: function(){
    //     let answer = this.calcBmi();
    //     if(answer < 18.5){
    //         console.log("You are underweight");
    //     }else if(answer <= 24.9){
    //         console.log("You have normal weight");
    //     }else if(answer <= 29.9){
    //         console.log("You are overweight");
    //     }else{
    //         console.log("you are obese");
    //     }
        
    // }
};

// personProfile.firstName = prompt("Enter Your First Name");
// personProfile.lastName = prompt("Enter Your Last Name");
// personProfile.job = prompt("What is Your Profession ?");
// personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
// let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
// for (let i = 0; i < parseInt(numberOfFamily); i++) {
//     personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
// }

// // call age and check vote fun
// personProfile.ageCalc();
// personProfile.checkVote();
// Adding Self Invoking Function Expression 
(function() {

    console.log("**************************************************************")
    console.log("Here is your Profile ")
    // console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    // console.log("Profession : " + personProfile.job);
    // console.log("Age : " + personProfile.age + " " + "years old");
    // console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    // console.log("Family Members ");
    //Displaying the family member with foreach
    // personProfile.familyMembers.forEach(function(member, index) {
    //     console.log("Family Member  " + (index + 1) + " : " + member);
    // });
    // call bmi calculator 
    console.log(personProfile.bmi);
    console.log("**************************************************************")
    console.log(personProfile.calcBmi());

})();
