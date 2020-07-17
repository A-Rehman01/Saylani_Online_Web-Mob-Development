//1. Write a program that takes a character (number or string) in a variable & checks
//whether the given input is a number,uppercase letter or lower case letter. 
//(Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

var check_upper_lower = prompt("Enter a Character/number I tell its uper case or lover case");
if (check_upper_lower >= 'A' && check_upper_lower <= 'Z') {
    document.write("<br>" + check_upper_lower + " is Uper Case");
}
else if (check_upper_lower >= 'a' && check_upper_lower <= 'z') {
    document.write("<br>" + check_upper_lower + " is Lower Case");
}
else if (+(check_upper_lower) >= '1' && +(check_upper_lower) <= '9') {
    document.write("<br>" + check_upper_lower + " is Number");
}
else {
    document.write("Invalid Character");
}

// 2. Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal. 
var input_num_1 = +prompt("Enter First Number");
var input_num_2 = +prompt("Enter Second Number");
if (input_num_1 > input_num_2) {
    document.write("<br>" + "<br>" + input_num_1 + " is Greater than " + input_num_2);
}
else if (input_num_1 === input_num_2) {
    document.write("<br>" + "<br>" + " Both number are Equals ");
}
else if (input_num_1 < input_num_2) {
    document.write("<br>" + "<br>" + input_num_2 + " is Greater than " + input_num_1);
}

//3. Write a program that takes input a number from user & state whether the number
// is positive, negative or zero. 

var input_num = +prompt("Enter a number i tell you its positve or negative or zero");
if (input_num > 0) {
    document.write("<br>" + "<br>" + input_num + " is Positve Number");
}
else if (input_num < 0) {
    document.write("<br>" + "<br>" + input_num + " is Negatve Number");
}
else if (input_num === 0) {
    document.write("<br>" + "<br>" + input_num + " is Zero");
}



//4. Write a program that takes a character (i.e. string of length 1) 
//and returns true if it is a vowel, false otherwise 

var input_Character = prompt("Enter A character i tell its a vowel or not ");
input_Character = input_Character.toLowerCase();
if (input_Character === 'a' || input_Character === 'e' || input_Character === 'i' ||
    input_Character === 'o' || input_Character === 'u') {
    document.write("<br>" + "<br>" + "True");
}
else {
    document.write("<br>" + "<br>" + "False");
}


//5. Write a program that a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message
//  “ Please enter your password” ii. Check if both passwords are same. 
//  If they are same, show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise
var password = "0123456xyz";
var enter_pass = prompt("Enter your Password here");
if (enter_pass === password) {
    document.write("<br>" + "<br>" + "“Correct! The password you entered matches the original password”");
}
else {
    document.write("<br>" + "<br>" + "“Incorrect password”");
}


//6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13;
//      if (hour < 18)
// {
//     greeting = "Good day";
//       else
//     greeting = "Good evening";
// } 

var hour = 13;
if (hour < 18) {
    document.write("<br>" + "<br>" + "Good day");
}
else {
    document.write("<br>" + "<br>" + "Good evening");
} 


//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
//Implement the following case using if, else & else if statements 
var time=+prompt("Enter time here According to 24 hours like 500=5 Oclock");
if(time>=0000 && time < 1200){
    document.write("<br>" + "<br>" + "Good Morning");
}
else if(time>=1200 && time < 1700){
    document.write("<br>" + "<br>" + "Good Afternoon");
}
else if(time>=1700 && time < 2100){
    document.write("<br>" + "<br>" + "Good Evening");
}
else if(time>=2100 && time < 2359){
    document.write("<br>" + "<br>" + "Good Night");
}