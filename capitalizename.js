var name = prompt("What is your name");

// 2 Capitalize the first letter of their name

//a isolate the first char
var firstChar  = name.slice(0,1);
//b capitalize the firstchar of the name
var capitalFirstChar = firstChar.toUpperCase();

//c isolate the rest of the name
var restOfName = name.slice(1, name.length);
var restOfName = restOfName.toLowerCase();

//d concatenate the first char with the rest of the char
var fullName = capitalFirstChar + restOfName;

alert("Hello there," + fullName);