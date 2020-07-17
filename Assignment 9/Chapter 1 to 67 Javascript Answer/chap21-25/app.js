//Task1
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var title = firstName + " " + lastName;
document.write(title);
document.write("<br>" + "<br>")

//Task2
var inputMobile = prompt("Enter Your favorite mobile name");
var lenghtofinputmobile = inputMobile.length;
document.write("My Favorite Phone is : " + inputMobile + "<br>" + "Lenght of String is : " + lenghtofinputmobile);
document.write("<br>" + "<br>")


//Task3
var pak = "Pakistan";
var index = pak.indexOf("n");
document.write("String : " + pak + "<br>" + "Index of 'n' :" + index);
document.write("<br>" + "<br>")

//Task4
var hello = "Hello World";
var index = hello.lastIndexOf("l");
document.write("String : " + hello + "<br>" + "Last index of 'I' : " + index);
document.write("<br>" + "<br>")

//Task5
var pak = "Pakistani";
document.write("String : " + pak + "<br>" + "Character at index 3 : " + pak[3]);
document.write("<br>" + "<br>")

// Task6
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var title = firstName.concat(" " + lastName);
document.write(title);
document.write("<br>" + "<br>")

//Task7
var hyder = "Hyderabad";
var isl = "Islam" + hyder.slice(5);
document.write("City : " + hyder + "<br>" + "After Replacement : " + isl);
document.write("<br>" + "<br>")

//Task8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message + "<br>");
message = message.replace(/and/g, "&");
document.write(message);
document.write("<br>" + "<br>")

//Task9
var integer = "472";
document.write("Value : " + integer + "<br>" + "Type : String" + "<br>");
integer = parseInt(integer);
document.write("Value : " + integer + "<br>" + "Type : Integer");
document.write("<br>" + "<br>")

//Task10
var inputsmall = prompt("Enter Something");
var inputlarge = inputsmall.toUpperCase();
document.write("User input : " + inputsmall + "<br>" + "Upper Case : " + inputlarge);
document.write("<br>" + "<br>")

//Task11
var inputlarge = prompt("Enter Something");
var inputsmall = inputlarge.toLowerCase();
document.write("User input : " + inputlarge + "<br>" + "Upper Case : " + inputsmall);
document.write("<br>" + "<br>")


// Task12
var numint = 35.36;
var numstr = numint.toString();
numstr = numstr.replace(".", "");
document.write("Number : " + numint + "<br>" + "Result : " + numstr)
document.write("<br>" + "<br>")

// Task13
var userinput = prompt("Enter Your Name");
var check = 0;

for (var i = 0; i < userinput.length; i++) {
    if (((userinput.charCodeAt(i) <= 64) || (userinput.charCodeAt(i) >= 123))
        || ((userinput.charCodeAt(i) >= 91) && (userinput.charCodeAt(i) <= 96))
    ) {
        if (((userinput.charCodeAt(i) != 32))) {
            check = 1;
            alert("Enter valid Name")
            break;
        }

    }
}
if (check === 0) {
    document.write("Your Name is " + userinput);
}
document.write("<br>" + "<br>")


//Task14
var arrlist = ["cake", "apple pie", "cookie", "chips", "patties"];
var inputitems = prompt("Enter Bakery items");
inputitems = inputitems.toLowerCase();
var checkitem = 0;
arrlist.forEach((items) => {
    if (inputitems === items) {
        document.write(items + " availabe")
        checkitem = 1;
    }
});
if (checkitem == 0) {
    document.write(inputitems + " Not Found")
}
document.write("<br>" + "<br>")


//Task15
var check = 0;
var spec = 0;
var inputpass = prompt("Enter a Password at least 6 Characters");
if (!(inputpass.charCodeAt(0) >= (48) && inputpass.charCodeAt(0) <= (57))
    && (inputpass.length > 5)) {
    for (var i = 0; i <= inputpass.length; i++) {
        if (((inputpass.charCodeAt(i) > 48) && (inputpass.charCodeAt(i) < 57))
            || ((inputpass.charCodeAt(i) > 65) && (inputpass.charCodeAt(i) < 90))
            || ((inputpass.charCodeAt(i) > 97) && (inputpass.charCodeAt(i) < 122))
        ) {
            spec += 1;
        }
    }
    for (var i = 0; i <= inputpass.length; i++) {
        if ((+inputpass[i] > 0 || +inputpass[i] < 9)) {
            if (inputpass.length === spec) {
                check = 2;
            }
        }
    }
    for (var i = 0; i <= inputpass.length; i++) {
        if ((inputpass[i] > 'A' || +inputpass[i] < 'Z') || (inputpass[i] > 'a' || +inputpass[i] < 'z')) {
            if (check === 2) {
                check = 3;
            }
        }
    }
}
if (check === 3) {
    alert(" Valid Password")
}
else {
    alert(" InValid Password")
}
document.write("<br>" + "<br>")


//Task16
var uni = "University of Karachi";
var uniarray = uni.split("");
for (var i = 0; i < uniarray.length; i++) {
    document.write(uniarray[i] + "<br>")
}
document.write("<br>" + "<br>")


//Task17
var userin = prompt("Enter a Word");
document.write("User Input : " + userin + "<br>" + "Last index of input : " + userin[userin.length - 1]);
document.write("<br>" + "<br>")

//Task18
var para2 = "The quick brown fox jumps over the lazy dog"
var para = para2.toLowerCase();
var check = "";
var count = 0;
for (var i = 0; i < para.length; i++) {
    if (para[i] != " ") {
        check = check + para[i];
    }
    if (para[i] == " ") {
        if (check === "the") {
            count = count + 1;
            check = "";
        }
        check = "";
    }
}

document.write("Text : " + para2 + "<br>" + "There are " + count + " occurrence(s) of word 'the.'");
document.write("<br>" + "<br>")


