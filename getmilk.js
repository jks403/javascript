

/* this function receives a number of bottles and outputs */ 
function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money/1.5);
   
    console.log("buy " + numberOfBottles + " bollles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse"); // add key word

    returen money % 1.5;       // remainder of this division
  }
 var change getMilk(4);        // $1.5 // capture this and save it in a variable
 console.log(change);          // lesson 121 7 minutes in

 
 
 
 function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);  //  121 6 minutes 
    
    return numberOfBottles;
}

/*------------------------------------------------------*/

function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveRight");
  
  var numberOfBottles = Math.floor(money/costPerBottle);
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
  
  console.log("moveLeft");
  console.log("enterHouse"); // add key word

  return calcChange(money, costPerBottle);     // remainder of this division
}

function calcBottles(startingMoney, costPerBottle){
  
  var numberOfBottles = Math.floor(startingMoney/costPerBottle);
  
  return numberOfBottles;

}

function calcChange(startingAmount, costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("hello master, here is your " + getMilk(5, 3) + " change");
                 // this 5 goes into the getMilk at the top







