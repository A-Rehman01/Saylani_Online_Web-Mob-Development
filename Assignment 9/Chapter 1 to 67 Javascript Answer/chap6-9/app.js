
// ==================== Chapter 6-9 strt ====================

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  
var a = 10;

document.write("<br>" + "<br>" + ("Result").bold() + "<br>" + "The value of a is: " + a + "<br>" + ".................................");

document.write("<br>" + "<br>" + "The value of ++a is: " + (++a) + "<br>" + "Now the Value of a is: " + a);

document.write("<br>" + "<br>" + "The Value of a++ is: " + (a++) + "<br>" + "Now the Value of a is: " + a)


document.write("<br>" + "<br>" + "The value of --a is: " + (--a) + "<br>" + "Now the Value of a is: " + a);

document.write("<br>" + "<br>" + "The Value of a-- is: " + (a--) + "<br>" + "Now the Value of a is: " + a)



//2. What will be the output in variables a, b & result after execution of the following script: 
var a = 2;
var b = 1;

document.write("<br>" + "<br>" + ("Step1").bold() + " The Value of a is: " + a + " After --a: " + (--a));
document.write("<br>" + ("Step2").bold() + " the Value of b is: " + b + " After --b: " + (--b));
document.write("<br>" + ("Step3").bold() + " the value of b is: " + b + " After ++b: " + (++b));
document.write("<br>" + ("Step4").bold() + " the value of b is: " + b + " After b--: " + (b--));
document.write("<br>" + ("Result").bold() + " a - b + b + b = " + (a - b + b + b));


//3. Write a program that takes input a name from user & greet the user.
var your_name = prompt("Enter Your Name");
document.write("<br>" + "<br>" + ("Your name is " + your_name).bold().fontsize(5.5));

//5. Write a program to take input a number from user & display it’s multiplication table on your browser.
// If user does not enter a new number, multiplication table of 5 should be displayed by default.
var input_num = +prompt("Enter The Number", 5);
document.write("<br>" + "<br>" + ("Table of " + input_num).bold() + "<br>")
for (var loop = 1; loop <= 10; loop++) {
    document.write("<br>" + input_num + " x " + loop + " = " + loop * input_num);
}
document.write("<br>" + "<br>");
// 6. Take 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 



var totalrows = 5;
var totalcol = 4;
var total_marks_each = 100;
var sub = [];
var sub_num = [];
var total_marks = 0;
var total_percentage = 0;
var rowarray = new Array();

for (var intilaize = 0; intilaize < totalrows; intilaize++) {
    rowarray[intilaize] = new Array(totalcol);
}
for (i = 0; i < 3; i++) {
    sub[i] = prompt("Enter " + (i + 1) + " subject name");
}
for (j = 0; j < 3; j++) {
    sub_num[j] = +prompt("Enter " + (j + 1) + " subject num");
    if (sub_num[j] > 100) {
        sub_num[j] = 100;
    }
    total_marks = total_marks + sub_num[j];
    total_percentage = total_percentage + (sub_num[j] / total_marks_each * 100)
}

for (var x = 1; x < totalrows - 1; x++) {
    rowarray[x][0] = sub[x - 1];
    rowarray[x][1] = total_marks_each;
    rowarray[x][2] = sub_num[x - 1];
    rowarray[x][3] = ((sub_num[x - 1] / total_marks_each * 100) + "%");
}

rowarray[0][0] = "Subjects";
rowarray[0][1] = "Total Marks";
rowarray[0][2] = "Obtained_Marks";
rowarray[0][3] = "Percentage";

rowarray[4][0] = "";
rowarray[4][1] = total_marks_each * 3;
rowarray[4][2] = total_marks;
rowarray[4][3] = total_percentage + "%";

function drawtable() {
    var markstable = document.getElementById('markstable');
    var tb1 = document.createElement("table");

    for (var loop = 0; loop < totalrows; loop++) {
        var row = document.createElement("tr");


        for (var loop2 = 0; loop2 < totalcol; loop2++) {
            if (loop === 0 || loop === totalrows - 1) {
                var col = document.createElement("th");
            }
            else {
                var col = document.createElement("td");
            }

            var celltext = document.createTextNode((rowarray[loop][loop2]));
            col.appendChild(celltext);
            row.appendChild(col);
        }
        tb1.appendChild(row);
    }
    markstable.appendChild(tb1);

}
window.onload = drawtable;


// ==================== Chapter 6-9 end ====================

