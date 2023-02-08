// this program asks the user for a name and the name of the potential love match
// it uses the random generator which produces a random number from 0 to .99999999
// i multiply it by 100 to get a percentage and depending where the random number falls, produces the appropriate output.




prompt("What is your name?");
prompt("What is their name?");

var LoveScore = Math.random() * 100;
LoveScore = Math.floor(LoveScore) + 1;
    
 

if (LoveScore >70 ) {
    alert("Your lovescore is " + LoveScore + "%" + "You love each other like Kanye loves Kanye");
}
if (LoveScore > 30 && LoveScore <= 70) {
    alert("Your lovescore is " + LoveScore + "%" );
}

if (Lovescore <=30){
    alert("you are oil and water");
}
else {
    alert("Your lovescore is " + LoveScore + "%" );
}
