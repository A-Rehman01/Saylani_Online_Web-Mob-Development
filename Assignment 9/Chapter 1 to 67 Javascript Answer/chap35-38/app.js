//Task1
function date() {
    var todaydate = new Date();
    return todaydate;
}
document.write(date());

//Task2
function name(first, last) {
    return first + " " + last;
}
var firstname = "Abdul"
var lastname = "Rehman"
document.write("Your Name : " + name(firstname, lastname));
document.write("<br>" + "<br>")

//Task3
function add(num1, num2) {
    return num1 + num2;
}
var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
document.write("Sum of two digits : " + add(num1, num2));
document.write("<br>" + "<br>")

//Task4
function calculater(num1, num2, operater) {
    if (operater === '+') {
        document.write("Sum of two s : " + (num1 + num2));
    }
    else if (operater === '-') {
        document.write("Sub of two digits : " + (num1 - num2));
    }
    else if (operater === '/') {
        document.write("Div of two digits : " + (num1 / num2));
    }
    else if (operater === '*') {
        document.write("Mul of two digits : " + (num1 * num2));
    }
}
var input1 = +prompt("Enter 1st Number");
var input2 = +prompt("Enter 2nd Number");
var op = prompt("Enter operater");
calculater(input1, input2, op);
document.write("<br>" + "<br>")

//Task5
function squares(num) {
    return num * num;
}
var input = +prompt("Enter a number");
document.write("Square of " + input + " is : " + squares(input));
document.write("<br>" + "<br>")

//Task6
function factorial(num) {
    var count = 1;
    for (var i = num; i > 1; i--) {
        count = (count * (i));
    }
    return count;
}
var input = +prompt("Enter a number");
document.write("Factoral of : " + input + " is : " + factorial(input));
document.write("<br>" + "<br>")

//Task7
function counting(strt, end) {
    for (var i = strt; i <= end; i++) {
        document.write(i + " ");
    }
}
var input1 = +prompt("Enter starting number");
var input2 = +prompt("Enter ending number");
counting(input1, input2);
document.write("<br>" + "<br>")

//Task8
function perpend(hy, ba) {
    var pen = (Math.sqrt((hy * hy) - (ba * ba))).toFixed(0);
    document.write("Perpendicular " + pen + "<br>");
    squ(hy, ba);
    function squ(hy, ba) {
        sq = 1 / 2 * hy * ba;
        document.write("Square " + sq + "<br>")
    }
}
var inputhyp = +prompt("Enter a Hypotenuse");
var inputbase = +prompt("Enter a Base");
perpend(inputhyp, inputbase)
document.write("<br>" + "<br>")

//Task9
function rect(width, lenght) {
    return (width * lenght);
}
var widthinput = +prompt("Enter width of Rectangle");
var lenghtinput = +prompt("Enter lenght of Rectangle");
document.write("Area of Rectangle :  " + rect(widthinput, lenghtinput));
document.write("<br>" + "<br>")

//Task10
function palin(word) {
    check = "";
    for (var i = word.length - 1; i >= 0; i--) {
        check = check + word[i];
    }
    return check;
}
var input = prompt("Enter a word");
input = input.toLowerCase();
var check = palin(input);
if (input === check) {
    document.write("palindrome");
}
else {
    document.write("Not a palindrome");
}
document.write("<br>" + "<br>")


//Task11
function firstcap(str, strlen) {
    str2 = "";
    final = "";
    for (var i = 0; i < strlen; i++) {
        if (str[i] === " ") {
            final = final + str2.charAt(0).toUpperCase() + str2.slice(1) + " ";
            str2 = "";
        }
        else {
            str2 = str2 + str[i];
        }
    }
    return final;
}
var str = "the quick brown fox";
var str2 = str.charAt(0).toUpperCase() + str.slice(1);
str = str + " ";
strlen = str.length;
var final = firstcap(str, strlen);
document.write("Example String : " + str + "<br>" + "Expacted String : " + final);
document.write("<br>" + "<br>")


//Task12
function lonword(str, strlen) {
    final = 0;
    final2 = "";
    var str2 = "";
    for (var i = 0; i < strlen; i++) {
        if (str[i] === " ") {
            if (final < str2.length) {
                final = str2.length;
                final2 = str2;
            }
            str2 = "";
        }
        else {
            str2 = str2 + str[i];
        }
    }
    return final2;
}
var word = "Web Development Tutorial";
word = word + " ";
wordlen = word.length;
var final = lonword(word, wordlen)
document.write("Example String : " + word + "<br>" + "Expected String : " + final);
document.write("<br>" + "<br>")

//Task13
function occurrence(str, search, strlen) {
    var count = 0;
    for (var i = 0; i < strlen; i++) {
        if (str[i] === search) {
            count++;
        }
    }
    return count;
}
var str = "JSResourceS.com";
str2 = str.toLowerCase();
strlen = str.length;
var search = 'o';
var search2 = search.toLowerCase();
var final = occurrence(str2, search2, strlen);
document.write("Sample : " + str + "<br>" + " occurrence of '" + search + "' is :  " + final);

document.write("<br>" + "<br>")

//Task14
function calCircum(pi, rad) {
    return (2 * pi * rad);
}
function calArea(pi, rad) {
    return (pi * rad * rad)
}
var pi = 3.142;
var rad = +prompt("Enter Radius od Circle");
var cirCum = calCircum(pi, rad)
var area = calArea(pi, rad)
document.write("The circumference is : " + cirCum + "<br>")
document.write("The area is : " + area)
document.write("<br>" + "<br>")
