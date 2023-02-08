
function lifeInWeeks(56){

var current_age = prompt("how old are you in years?");
    var weeks_age = current_age * 52;
    var weeks_left = 4680 - weeks_age;
    alert("You have "+ weeks_left + "weeks left if you live to be 90");
}
function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    console.log("You have " + days + " days, " + weeks + " weeks, and "  + months + " months left." );
}

/*        */

function LifeInDays(){
    var current_age = prompt("how old are you in years?");
    var current_days = current_age * 365;
    var days_left = 32850 - current_days;
     alert("You have "+ days_left + " days left if you live to be 90");
}
LifeInWeeks(56);


/*       */ 

function LifeInMonths(){
    var current_age = prompt("how old are you in years?");
    var current_months = current_age * 12;
    var months_left = 10i0 - current_months;
     alert("You have "+ months_left + " months left if you live to be 90");
}
LifeInMonths(56);



function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + bottles + " bottles of  Milk");  
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  
  getMilk(5);  