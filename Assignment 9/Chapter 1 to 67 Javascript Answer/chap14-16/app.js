//1. Declare an empty array using JS literal notation to store student names in future. 
var arrlit_stu_names = [];


//2. Declare an empty array using JS object notation to store student names in future. 
var arrob_stu_names = new Array();

// 3. Declare and initialize a strings array.
var arr = ["Orange", "Banana", "Apple"];
// 4.  Declare and initialize a numbers array. 
var arr = [12, 14, 25, 10];
// 5.  Declare and initialize a boolean array. 
var arr = [12, "apple", 20, "Banana"];
// 6. Declare and initialize a mixed array

// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// Show the listed qualifications in your browser like: 

var arr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.", "Phil", "PhD"]
for (var i = 0; i < arr.length; i++) {
    document.write("<br>" + "<br>" + (i + 1) + ") " + arr[i]);
}

//8. Write a program to store 3 student names in an array.
//Take another array to store score of these three students. 
//Assume that total marks are 500 for each student, 
//display the scores & percentages of students like: 

var stu_names = ["Ali", "Ahsan", "Manan"];
var stu_num = [+prompt("Enter Your Score 1"), +prompt("Enter Your Score 2"), +prompt("Enter Your Score 3")];
var total_score = 500;
document.write("<br>");
for (var i = 0; i < stu_num.length; i++) {
    document.write("<br>" + "Score of " + stu_names[i] + " is " + stu_num[i] +
        ". Percentage:" + ((stu_num[i] / total_score) / 100) + "%")
}



// 9. Initialize an array with color names. Display the array elements in your browser. 
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser. 
// d. Delete the first color in the array. Display the updated array in your browser. 
// e. Delete the last color in the array. Display the updated array in your browser. 
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired position/index. . 
// Display the updated array in your browser. 
// g. Ask the user at which index he/she wants to delete color(s) 
// & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var arr_colour = [" red ", " green ", " blue ", " orange ", " yellow "];
document.write("<br>" + "<br>" + "By default Array is " + "<br>" + arr_colour);

var add_colour_begin = prompt("Which Colour You Add in the Beginning");
arr_colour.unshift(add_colour_begin);
document.write("<br>" + "Now array is " + arr_colour);

var add_colour_end = prompt("Which Colour You Add in the end");
arr_colour.push(add_colour_end);
document.write("<br>" + "Now array is " + arr_colour);

document.write("<br>" + "Add Two colour in the start")
arr_colour.unshift("Violet", "lightblue");
document.write("<br>" + "Now array is " + arr_colour);

document.write("<br>" + "Delete first Colour")
arr_colour.shift();
document.write("<br>" + "Now array is " + arr_colour);

document.write("<br>" + "Delete last Colour")
arr_colour.pop();
document.write("<br>" + "Now array is " + arr_colour);

var add_colour_index = prompt("At which index you add colour");
var add_colour_index_name = prompt("Enter colour name");
arr_colour.splice(add_colour_index - 1, 0, add_colour_index_name);
document.write("<br>" + "Now array is " + arr_colour);


var del_colour_index = prompt("At which index you delete colour");
var del_colour_index_name = prompt("How many Colour you want to delete");
arr_colour.splice(del_colour_index - 1, del_colour_index_name);
document.write("<br>" + "Now array is " + arr_colour);

//10. Write a program to store student scores in an array & 
//sort the array in ascending order using Array’s sort method. 
var stu_score = [320, 230, 480, 120]
document.write("<br>" + "<br>" + "Scores of Student : " + stu_score);
document.write("<br>" + "Orderd scores of student : " + stu_score.sort());

//11. Write a program to initialize an array with city names. 
//Copy 3 array elements from cities array to selectedCities array
var arr_city = ["Karaci", "lahore", "Islamabad", "Quetta", "Peshawar"];
var sub_arr_city = arr_city.slice(2, 4);
document.write("<br>" + "<br>" + ("City_list : ").bold() + arr_city);
document.write("<br>" + "<br>" + ("Selected_city_list : ").bold() + sub_arr_city);

// 12.  Write a program to create a single string from the below mentioned array:
//  var arr = [“This ”, “ is ”, “ my ”, “ cat”]
var arr_in_str = ["This", "is", "my", "cat"];
document.write("<br>" + "<br>" + "Array : " + "<br>" + arr_in_str);
document.write("<br>" + " String : " + "<br>" + arr_in_str.join(" "));


//13. Create a new array. Store values one by one in such a way that you can access the values
// in the order in which they were stored. (FIFO-First In First Out)

var arr_Fifo = ["Keyboard", "mouse", "printer", "moniter"];
var fifolenght = arr_Fifo.length;
document.write("<br>" + "<br>" + ("Devices : ").bold() + arr_Fifo + "<br>")
for (var i = 0; i < fifolenght; i++) {
    document.write("Out" + "<br>" + arr_Fifo.shift() + "<br>");
}

//14. Create a new array. Store values one by one in such a way that you can access the values
// in reverse order. (Last InFirst Out

var arr_Fifo = ["Keyboard", "mouse", "printer", "moniter"];
var fifolenght = arr_Fifo.length;
document.write("<br>" + "<br>" + ("Devices : ").bold() + arr_Fifo + "<br>")
for (var i = 0; i < fifolenght; i++) {
    document.write("Out" + "<br>" + arr_Fifo.pop() + "<br>");
}

//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//Display the following dropdown/select menu in your browser using document.write() method:
document.write("<br>" + "<br>");
arr_phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
document.write("<option>" + "Select Phone" + "</option>")
arr_phone.forEach(element => {
    document.write("<option>" + element + "</option>")

});
document.write("</select>");

