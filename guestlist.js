"Angela"
"Jack"
"Pam"
"James"
"Lara"
"Jason"

var guestlist = ["Angela","Jack","Pam","James","Lara","Jason"]; 






var search_name = prompt("what is your name");
guestlist.includes(search_name);

alert(guestlist.includes(search_name));

var guestName = prompt("What is your name? ");
 if (guestlist.includes(guestname)){
     alert("Welcome");
 } else {
     alert("Sorry, maybe next time");
 }