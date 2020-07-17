// ============= Chap 38-42 Start ============

//Task1
var number = +prompt('Enter Number');
var power = +prompt('Enter Power');
var Final = Calpower(number, power)
function Calpower(number1, power1) {
    var Answer = 1;
    for (var i = 1; i <= power1; i++) {
        Answer = Answer * number1
    }
    return ((Answer));
}
document.write("Number: " + number + "<br>" + 'Power: ' + power + "<br>" + "Answer: " + Final)
document.write("<br>" + "<br>")

//Task2
var year = +prompt("Enter Year");
var Final = Leapyear(year)
function Leapyear(year1) {
    if (year % 4 === 0) {
        return " Leap year"
    }
    else {
        return "not a Leap year"
    }
}
document.write(year + " is " + Final);
document.write("<br>" + "<br>")


//Task3
var Side1 = +prompt("Enter 1st Side of Triangle ");
var Side2 = +prompt("Enter 2nd Side of Triangle ");
var Side3 = +prompt("Enter 3rd Side of Triangle ");
var Final = AreaTri(Side1, Side2, Side3)
function AreaTri(Sideone, Sidesec, Sidethir) {
    var S = (Sideone + Sidesec + Sidethir) / 2;
    var Ans = S * (S - Sideone) * (S - Sidesec) * (S - Sidethir);
    return Ans;
}
document.write("Area of Triangle" + "<br>" + "S(S-a)(S-b)(S-c)" + "<br>" + "a = " + Side1 + " b = " + Side2 + " c = " + Side3);
document.write("<br>" + "Area is: " + Final);
document.write("<br>" + "<br>")

//Task4
var Sub1 = +prompt("Enter 1st Subject Marks");
var Sub2 = +prompt("Enter 2nd Subject Marks");
var Sub3 = +prompt("Enter 3rd Subject Marks");
var Final = Mainfun(Sub1, Sub2, Sub3);
function Mainfun(Subone, Subsec, Subthir) {
    var avrage = Average(Subone, Subsec, Subthir);
    var per = Percentage(Subone, Subsec, Subthir);
    avrage = avrage.toFixed(2)
    per = per.toFixed(2)
    document.write("Average is: " + avrage + "<br>" + "Percentage is: " + per + "%");
}
function Average(Subone, Subsec, Subthir) {
    return ((Subone + Subsec + Subthir) / 3);
}
function Percentage(Subone, Subsec, Subthir) {
    var total = 300;
    var Obt = Subone + Subsec + Subthir;
    var per = Obt / total * 100
    return per;
}
document.write("<br>" + "<br>")


//Task5

var Sample = prompt("Enter Sample Data");
var check = prompt("Which character you want to find");
var Final = myIndexOf(Sample, check);
function myIndexOf(Sample1, find1) {
    var index = -1;
    for (var i = 0; i < Sample1.length; i++) {
        if (Sample1[i] === find1) {
            index = i;
            return index;
        }
    }
    return index;
}
document.write(Sample + "<br>" + "indexOf " + check + ": " + Final);
document.write("<br>" + "<br>")

//Task6
var Sample = prompt("Enter Data");
var Final = Delvowels(Sample);

function Delvowels(Sample1) {
    Sample1 = Sample1.toLowerCase();
    Sample2 = '';
    for (var i = 0; i < Sample1.length; i++) {
        if (Sample1[i] === 'a' || Sample1[i] === 'e' || Sample1[i] === 'i' || Sample1[i] === 'o' || Sample1[i] === 'u') {

        }
        else {
            Sample2 = Sample2 + Sample1[i];
        }
    }
    return Sample2;
}
document.write(Sample + "<br>" + "WithoutVowels " + Final);
document.write("<br>" + "<br>")

//Task7
var Sample = prompt("Enter Data");
var Finel = Checkvowels(Sample)
var Final2 = '';
function Checkvowels(Sample1) {
    Sample1 = Sample1.toLowerCase();
    Sample1 = Sample1 + " ";
    var Sample2 = '';
    for (var i = 0; i < Sample1.length; i++) {
        switch (Sample1[i]) {
            case 'a':
                if ((Sample1[i + 1] === 'a') || (Sample1[i + 1] === 'e') || (Sample1[i + 1] === 'i') || (Sample1[i + 1] === 'o') || (Sample1[i + 1] === 'u')) {
                    Sample2 = Sample2 + Sample1[i] + Sample1[i + 1] + ",";
                    console.log(Sample2)
                }
                break;
            case 'e':
                if ((Sample1[i + 1] === 'a') || (Sample1[i + 1] === 'e') || (Sample1[i + 1] === 'i') || (Sample1[i + 1] === 'o') || (Sample1[i + 1] === 'u')) {
                    Sample2 = Sample2 + Sample1[i] + Sample1[i + 1] + ",";
                    console.log(Sample2)
                }
                break;
            case 'i':
                if ((Sample1[i + 1] === 'a') || (Sample1[i + 1] === 'e') || (Sample1[i + 1] === 'i') || (Sample1[i + 1] === 'o') || (Sample1[i + 1] === 'u')) {
                    Sample2 = Sample2 + Sample1[i] + Sample1[i + 1] + ",";
                    console.log(Sample2)
                }
                break;
            case 'o':
                if ((Sample1[i + 1] === 'a') || (Sample1[i + 1] === 'e') || (Sample1[i + 1] === 'i') || (Sample1[i + 1] === 'o') || (Sample1[i + 1] === 'u')) {
                    Sample2 = Sample2 + Sample1[i] + Sample1[i + 1] + ",";
                    console.log(Sample2)
                }
                break;
            case 'u':
                if ((Sample1[i + 1] === 'a') || (Sample1[i + 1] === 'e') || (Sample1[i + 1] === 'i') || (Sample1[i + 1] === 'o') || (Sample1[i + 1] === 'u')) {
                    Sample2 = Sample2 + Sample1[i] + Sample1[i + 1] + ",";
                    console.log(Sample2)
                }
                break;
            default:
                Sample2 = Sample2
        }
    }
    return Sample2
}
//Remove end coma
for (var i = 0; i < Finel.length - 1; i++) {
    Final2 = Final2 + Finel[i];
}

document.write(Sample + "<br>" + "Vowels " + Final2);
document.write("<br>" + "<br>")


//Task 8
var inputDis = +prompt("Enter Distance")
var meter = Kmtometer(inputDis);
var inches = Kmtoinches(inputDis);
var feet = Kmtofeet(inputDis);
var centiMeter = KmtoCent(inputDis);
meter = meter.toFixed(2);
centiMeter = centiMeter.toFixed(2);
feet = feet.toFixed(2);
inches = inches.toFixed(2);
function Kmtometer(inputDis1) {
    return (inputDis1 / 1000)
}
function Kmtoinches(inputDis1) {
    return (inputDis1 * 39370)
}
function Kmtofeet(inputDis1) {
    return (inputDis1 * 3280.8)
}
function KmtoCent(inputDis1) {
    return (inputDis1 / 100000)
}

document.write("Distance between in two Cities" + "<br>");
document.write("In meter " + meter + " In incehes " + inches + " In feets " + feet + " In Centimeter " + centiMeter);
document.write("<br>" + "<br>")


//Task9
var hours = prompt("Enter Withdraw Amount");
overTimePay(hours);

function overTimePay(hours1) {
    if (hours1 > 40) {
        return (hours1 - 40) * 12;
    } else {
        return 0;
    }
}
// document.write("<br>" + "<br>")


//Task10

var input = prompt("Enter Withdraw Amount");
Currency(input);
function Currency(input1) {
    var fifty = (+input1) % 100;

    if (fifty > 50) {
        var ten = fifty - 50;
        fif = 1;
    }

    if (fifty < 50) {
        var ten = fifty;
        fif = 0;
    }

    var tenS = ten.toString();
    document.write("You will have " + input1[0] + " Hundred notes " + fif + " fifty notes s" + tenS[0] + " ten notes")
}


// ============= Chap 38-42 End ============