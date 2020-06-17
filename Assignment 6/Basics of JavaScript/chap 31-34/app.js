//Task1
var dateToday = new Date();
document.write(dateToday);
document.write("<br>" + "<br>")

//Task2
var dateToday = new Date();
var montharray = ["Janvary", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
var month = dateToday.getMonth();
document.write("Current Month : " + montharray[month]);
document.write("<br>" + "<br>")


//Task3
var dateToday = new Date();
var day = dateToday.getDay();
var dayarray = ["Sun", "Mon", "Teu", "Wed", "Thurs", "Fri", "Sat"]
alert("Today is : " + dayarray[day]);
document.write("<br>" + "<br>")


//Task4
var dateToday = new Date();
var day = dateToday.getDay();
var dayarray = ["Sun", "Mon", "Teu", "Wed", "Thurs", "Fri", "Sat"]
if (+day === 0 || +day === 6) {
    alert("Its Fun Day");
}
document.write("<br>" + "<br>")

//Task5
var dateToday = new Date();
var date = dateToday.getDate();
if (date < 16) {
    document.write("First fifteen days of the Month");
}
else {
    document.write("Last days of the Month");
}
document.write("<br>" + "<br>")

//Task6
var dateToday = new Date();
document.write("Current Date :  " + dateToday + "<br>");
var minuts = +((dateToday.getTime()) / 1000) / 60;
document.write("Elapsed milliseconds since janvery 1,1970 : " + dateToday.getTime() + "<br>");
document.write("Elapsed minutes since janvery 1,1970 : " + minuts + "<br>");
document.write("<br>" + "<br>")

//Task7
var dateToday = new Date();
var time = dateToday.getHours();
if (+time <= 12) {
    document.write("its PM")
}
else {
    document.write("its AM");
}
document.write("<br>" + "<br>")

//Task8
var dateToday = new Date();
dateToday.setMonth(11);
dateToday.setDate(31);
var later_Date = dateToday;
document.write("Later Date : " + later_Date)
document.write("<br>" + "<br>")

//Task9
var dateToday = new Date();
var currentday = (+dateToday.getTime()) * (1.1574074 * Math.pow(10, -8));
currentday = currentday.toFixed(0);

var prevdate = new Date();
prevdate.setFullYear(2015)
prevdate.setMonth(6);
prevdate.setDate(18);
var preday = (+prevdate.getTime()) * (1.1574074 * Math.pow(10, -8));
preday = preday.toFixed(0);

var final = currentday - preday;
document.write(final, "days have passed since 1st Ramadan,2015");
document.write("<br>" + "<br>")

//Task10
var dateToday = new Date();
var dateToday2 = new Date();
dateToday.setDate(5);
dateToday.setMonth(11);
dateToday.setFullYear(2015)
document.write("On Reference date :" + dateToday)
var preyear = ((+dateToday.getTime()) / 1000).toFixed(0);
var curryear = ((+dateToday2.getTime()) / 1000).toFixed(0);
var final = curryear - preyear;
document.write("<br>" + final + " seconds had passed since beginning of 2015");
document.write("<br>" + "<br>")


//Task11
var dateToday = new Date();
document.write("Current Date : " + dateToday + "<br>")
var hour = +dateToday.getHours();
hour = hour - 1;
dateToday.setHours(hour);
document.write("1 hour ago , it was : " + dateToday + "<br>");
document.write("<br>" + "<br>")

//Task12
var dateToday = new Date();
document.write("Current Date : " + dateToday + "<br>")
var year = dateToday.getFullYear();
year = year - 100;
dateToday.setFullYear(year);
document.write("100 years back it was : " + dateToday + "<br>")
document.write("<br>" + "<br>")

//Task13
var dateToday = new Date();
var age = +prompt("Enter your age");
var year = +dateToday.getFullYear() - age;
document.write("Your age is : " + age + "<br>" + "Your birth year is : " + year);
document.write("<br>" + "<br>")

//Task14
document.write(("K-Electric Bill" + "<br>").bold());
var name = prompt("Enter your name");
var dateToday = new Date();
var month = dateToday.getMonth();
var montharray = ["Janvary", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
var month = montharray[month];
var number_of_unit = prompt("Enter Numbers of Unit");
var charges_of_unit = prompt("Enter charges per Unit");

var net_Amount = ((+number_of_unit) * (+charges_of_unit));
var late_Amount = 350;
var gross_Amount = net_Amount + late_Amount;

net_Amount = net_Amount.toString();
gross_Amount = gross_Amount.toString();
late_Amount = late_Amount.toString();
document.write("Customer Name : " + name.bold() + "<br>")
document.write("Month : " + month.bold() + "<br>")
document.write("Number of Unit : " + number_of_unit.bold() + "<br>")
document.write("Charges per Unit : " + charges_of_unit.bold() + "<br>" + "<br>")
document.write("Net amount payable (Within due date) : " + net_Amount.bold() + "<br>")
document.write("Late payment surchange : " + late_Amount.bold() + "<br>")
document.write("Gross amount payable (After due date) : " + gross_Amount.bold() + "<br>")
document.write("<br>" + "<br>")

