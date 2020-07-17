// ==================== Chapter 9-11 strt ====================

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, 
//welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter your city");
city = city.toLowerCase();
if (city === "karachi") {
    document.write("<br>" + "<br>" + "“Welcome to city of lights”");
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: 
//Good Morning Sir. If the user is female, give the message: Good Morning Ma’am
var gender = prompt("Enter your Gender");
gender = gender.toLowerCase();
if (gender === "male") {
    document.write("<br>" + "<br>" + "“Good Morning Sir”");
}
else if (gender === "female") {
    document.write("<br>" + "<br>" + "“Good Morning Ma'am”");
}


//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

document.write("<br>" + "<br>");

var trafic_rows = 4;
var trafic_col = 2;
var signals = [];
for (var x = 0; x < 3; x++) {
    signals[x] = prompt("Enter " + (x + 1) + " Signal Colours ");
}
var trafic_row_array = new Array();
trafic_row_array[0] = new Array(trafic_col);
trafic_row_array[1] = new Array(trafic_col);
trafic_row_array[2] = new Array(trafic_col);
trafic_row_array[3] = new Array(trafic_col);

trafic_row_array[0][0] = "Signal Colour";
trafic_row_array[0][1] = "Message";

for (var i = 1; i < trafic_rows; i++) {
    if (signals[i - 1] === "red" || signals[i - 1] === "Red" || signals[i - 1] === "RED") {
        trafic_row_array[i][0] = signals[i - 1];
        trafic_row_array[i][1] = "Must Stop";
    }
    if (signals[i - 1] === "Green" || signals[i - 1] === "green" || signals[i - 1] === "GREEN") {
        trafic_row_array[i][0] = signals[i - 1];
        trafic_row_array[i][1] = "Move Slow";
    }
    if (signals[i - 1] === "Yellow" || signals[i - 1] === "yellow" || signals[i - 1] === "YELLOW") {
        trafic_row_array[i][0] = signals[i - 1];
        trafic_row_array[i][1] = "Ready to move";
    }
}
function trafic() {
    var trafic_Roads = document.getElementById('trafic_Roads');
    var tra_tb = document.createElement("table");

    for (var loop = 0; loop < trafic_rows; loop++) {
        var row = document.createElement("tr");

        for (var loop2 = 0; loop2 < trafic_col; loop2++) {
            var col = document.createElement("td");

            var coltext = document.createTextNode((trafic_row_array[loop][loop2]));
            col.appendChild(coltext);
            row.appendChild(col);
        }
        tra_tb.appendChild(row);
    }
    trafic_Roads.appendChild(tra_tb);
}
window.onload = trafic;






//4. Write a program to take input remaining fuel in car (in litres) from user.
// If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var fuel = +prompt("Enter your Car fuel in liters", 1);
if (fuel < 0.25) {
    document.write("<br>" + "<br>" + "“Please refill the fuel in your car”")
}
else {
    document.write("<br>" + "<br>" + "“Your Car fuel is upto date”")
}


//5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
//a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

//6. Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
document.write("<br>" + "<br>");

var subjectno1 = +prompt("Enter Marks For Subject 1");
var subjectno2 = +prompt("Enter Marks For Subject 2");
var subjectno3 = +prompt("Enter Marks For Subject 3");

var total_marks = 300;
var obt_marks = subjectno1 + subjectno2 + subjectno3;
var stru_per = (obt_marks / total_marks * 100);


document.write("<br>" + ("Marks Sheet").bold());
document.write("<br>" + " Total Marks : " + total_marks);
document.write("<br>" + " Obtained Marks : " + obt_marks);
document.write("<br>" + " Percentage : " + stru_per + "%");
if (stru_per >= 80) {
    document.write(" <br> " + " Grade : A-one " + " <br>" + "Remarks : Excellent");

}
else if (stru_per >= 70) {
    document.write(" <br> " + " Grade : A " + " <br>" + "Remarks : Good");

}
else if (stru_per >= 60) {
    document.write(" <br> " + " Grade : B " + " <br>" + "Remarks : You Need to improve");

}
else {
    document.write(" <br> " + " Grade : Fail " + " <br>" + "Remarks : Sorry");
}


// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.     

var find = +prompt("Enter Number & I will tell you Correct or Close")
var secret = 5;
if (find === secret) {
    document.write("<br>" + "<br>" + "“Bingo! Correct answer”");
}
else if (secret + 1 === find || secret - 1 === find) {
    document.write("<br>" + "<br>" + "“Close enough to the correct answer”");
}
else {
    document.write("<br>" + "<br>" + "“Wrong Answer Better Luck next time”");
}

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
var num_div_3 = +prompt("Ente Number I tell you this Number is divisible by 3 or not");
if (num_div_3 % 3 === 0) {
    document.write("<br>" + "<br>" + "Your Number is divisible by 3");
}
else {
    document.write("<br>" + "<br>" + "Your Number is not divisible by 3");
}


//9. Write a program that checks whether the given input is an even number or an odd number. 
var num_even_odd = +prompt("Enter a Number I tell you this is odd or Even number");
if (num_even_odd % 2 === 0 || num_even_odd === 0) {
    document.write("<br>" + "<br>" + num_even_odd + " is Even Number");
}
else if (num_even_odd % 2 != 0) {
    document.write("<br>" + "<br>" + num_even_odd + " is Odd Number");
}
else {
    document.write("<br>" + "<br>" + "Invalid Input");
}


//10. Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”     
var temp = +prompt("Enter the Temperature");
if (temp > 40) {
    document.write("<br>" + "<br>" + "“It is too hot outside.”");
}
else if (temp > 30) {
    document.write("<br>" + "<br>" + "“The Weather today is Normal.”");
}
else if (temp > 20) {
    document.write("<br>" + "<br>" + "“Today’s Weather is cool.”");
}
else if (temp > 10) {
    document.write("<br>" + "<br>" + "“OMG! Today’s weather is so Cool.”");
}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. 
// Take the following input: 
// a. First number b. Second number 
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user.    
var input_num1 = +prompt("Enter first Number");
var input_num2 = +prompt("Enter Second Number");
var operater = prompt("Enter Operater");

if (operater === "+") {
    document.write("<br>" + "<br>" + input_num1 + " + " + input_num2 + " = " + (input_num1 + input_num2));
}
else if (operater === "-") {
    document.write("<br>" + "<br>" + input_num1 + " - " + input_num2 + " = " + (input_num1 - input_num2));
}
else if (operater === "*") {
    document.write("<br>" + "<br>" + input_num1 + " * " + input_num2 + " = " + (input_num1 * input_num2));
}
else if (operater === "/") {
    document.write("<br>" + "<br>" + input_num1 + " / " + input_num2 + " = " + (input_num1 / input_num2));
}
else if (operater === "%") {
    document.write("<br>" + "<br>" + input_num1 + " % " + input_num2 + " = " + (input_num1 % input_num2));
}
else {
    document.write("<br>" + "<br>" + "Invalid Operater");
}



// ==================== Chapter 9-11 end ====================
