//Task1
var inputint = +prompt("Enter a Positive Number");
document.write("Number : " + inputint + "<br>" + "Round off value: " + Math.round(inputint) + "<br>" + "floor value : " + Math.floor(inputint) + "<br>" + "ceil value : " + Math.ceil(inputint));
document.write("<br>"+"<br>");

//Task2
var inputint = +prompt("Enter a Negative Number");
document.write("Number : " + inputint + "<br>" + "Round off value: " + Math.round(inputint) + "<br>" + "floor value : " + Math.floor(inputint) + "<br>" + "ceil value : " + Math.ceil(inputint));
document.write("<br>"+"<br>");

//Task3
var inputnum = +prompt("Enter a Number")
document.write("The Absolute Value of " + inputnum + " is " + Math.abs(inputnum));;
document.write("<br>"+"<br>");

//Task4
for (var i = 0; i <= 1; i++) {
    var rand=((Math.random()*5).toFixed(0));
    rand=+rand+1;
    document.write("Random Dice Value : " + rand + "<br>");
}
document.write("<br>"+"<br>");


//Task5
for (var i = 0; i <= 1; i++) {
    var rand = +((Math.random() * 1).toFixed(0)) + 1;
    if (rand === 1) {
        document.write(rand + "<br>" + "Random Coin Value is : Tail" + "<br>");
    }
    if (rand === 2) {
        document.write(rand + "<br>" + "Random Coin Value is : Head" + "<br>");
    }
}
document.write("<br>"+"<br>");

//Task6
var randbet = +(Math.random() * 97).toFixed(0) + 2;
document.write("Random number between 1 to 100 : " + randbet);
document.write("<br>"+"<br>");

//Task7
var inputweight = prompt("Enter Your Weight ");
var check = "";
for (var i = 0; i < inputweight.length; i++) {
    if ((inputweight[i] >= 'A' && inputweight[i] <= 'Z')
        || (inputweight[i] >= 'a' && inputweight[i] <= 'z')) {
        break;
    }
    check = check + inputweight[i];
}
document.write("The Weight of User is : " + check + " Kilograms");
document.write("<br>"+"<br>");

//Task8
var secret=+(Math.random()*8).toFixed(0)+1;
var userinput=+prompt("Enter a Number");
if(secret===userinput){
    document.write("Congrats You find Secrets Number : " + secret);
}
else{
    document.write("Try again")
}
document.write("<br>"+"<br>");
