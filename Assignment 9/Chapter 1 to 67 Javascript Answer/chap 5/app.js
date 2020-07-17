// ==================== Chapter 5 strt ====================

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 
var input1 = 5;
var input2 = 10;
var result = input1 + input2;
document.write("<br>" + "<br>" + "Sum of " + input1 + " & " + input2 + " is " + result);

//2. Repeat task1 for subtraction, multiplication, division & modulus. 
var input1 = 5;
var input2 = 10;
var result1 = input1 - input2;
var result2 = input1 * input2;
var result3 = input1 / input2;
var result4 = input1 % input2;

document.write("<br>" + "<br>" + "Subtraction of " + input1 + " & " + input2 + " is " + result1);

document.write("<br>" + "Dividie of " + input1 + " & " + input2 + " is " + result3);

document.write("<br>" + "multiplication of " + input1 + " & " + input2 + " is " + result2);

document.write("<br>" + "Modulous of " + input1 + " & " + input2 + " is " + result4);

//3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”. 
var input;
document.write("<br>" + "<br>" + "Value After Varaible Declearation is " + input);
input = 5;
document.write("<br>" + "Initial Value: " + input);
input++;
document.write("<br>" + "Value After Increment is: " + input);
input = input + 7;
document.write("<br>" + "Value After Addition of 7 is " + input);
input--;
document.write("<br>" + "Value After Decrement is: " + input);
input = input % 3;
document.write("<br>" + "after dividing the variable’s value by 3." + "<br>" + "The Remainder us " + input);


//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable
// & calculate the cost of buying 5 tickets to a movie. Example output:
var cost_One_Movive = 600;
var buying_tickets = 5;
var total_cost = cost_One_Movive * buying_tickets;
document.write("<br>" + "<br>" + "Total Cost to Buy " + buying_tickets + " Tickets to a Movie is " + total_cost + "PKR");


//5. Write a script to display multiplication table of any number in your browser. E.g 
document.write("<br>" + "<br>" + ("Table oF 5").bold())
for (var loop = 1; loop <= 10; loop++) {
    document.write("<br>" + "5 x " + loop + " = " + loop * 5);
}


//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var temp_Cel = 25;
var temp_Fah = 70;

var temp_cel_in_fah = ((temp_Fah - 32) * 5 / 9);
var temp_fah_in_cel = ((temp_Cel * 9 / 5) + 32);

document.write("<br>" + "<br>" + temp_Cel + "o".sup() + "C is " + temp_fah_in_cel + "o".sup() + "F" + "<br>" + temp_Fah + "o".sup() + "F"
    + " is " + temp_cel_in_fah + "o".sup() + "C");

//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2
// e. Shipping charges
var item1_price = 650;
var item2_price = 100;
var item1_Quantity = 3;
var item2_Quantity = 7;
var shipping_charges = 100;

document.write("<br> " + "<br> " + ("Shopping Cart").bold())
document.write("<br>" + "Price OF item-1 is = " + item1_price + "<br>" + "Quantity of item-1 is = " + item1_Quantity +
    "<br>" + "Price OF item-2 is = " + item2_price + "<br>" + "Quantity of item-2 is = " + item2_Quantity + "<br>" + "Shipping Charges = " + shipping_charges
    + "<br>" + "<br>" + "Total cost of your Order is = " + ((item1_price * item1_Quantity) + (item2_price * item2_Quantity) + shipping_charges));


//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
var total_Marks = 980;
var obtained_Marks = 804;
var percentage = (obtained_Marks / total_Marks) * 100;

document.write("<br>" + "<br>" + ("Marks Sheet").bold());
document.write("<br>" + "<br>" + "Total Marks " + total_Marks + "<br>" + "Marks Obtained " + obtained_Marks +
    "<br>" + "Percentage: " + percentage + "%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression. 
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

var dollars = 10;
var riyals = 25;
var paksitan_Currency = (dollars * 104.80) + (riyals * 28);

document.write("<br>" + "<br>" + ("Currency in PKR").bold() + "<br>" + "Total Currency in PKR: " + paksitan_Currency);

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 
var arithmetic_Operation = 55;
var expression = (((arithmetic_Operation + 5) * 10) / 2);
document.write(" <br>" + " <br>" + ("Expression").bold() + " <br>" + "[{(55+5)*10}/2] = " + expression);

//11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.
var current_year = 2020;
var birth_year = 1998;
document.write("<br>" + "<br>" + ("Age Calculater").bold() + "<br>" + "Current Year " + current_year + "<br>" + "Birth Year " + birth_year +
    "<br>" + "Your Age is: " + (current_year - birth_year));

//12. The Geometrizer: Calculate properties of a circle. 
var radius_of_circle = 20;
var pi = 3.142;
var circumference_of_circle = 2 * pi * radius_of_circle;
var area_of_circle = pi * radius_of_circle * radius_of_circle;

document.write("<br>" + "<br>" + ("The Geometrizer").bold() + "<br>" + "Radius of a Circle: " + radius_of_circle + "<br>" +
    "The Circumference is: " + circumference_of_circle + "<br>" + "THe Area is: " + area_of_circle);

// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder nomore. 
//  a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life.

var fav_Snack = "Kurkure";
var age = 20;
var max_Age = 65;
var no_piece_per_day = 3;


document.write("<br>" + "<br>" + ("The Lifetime Supply Calculator").bold());
document.write("<br>" + "<br>" + " Favourite Snack is: " + fav_Snack + "<br>" + "Currrent Age is: " + age + "<br>" + "Estimate Maximum Age is: " + max_Age + "<br>" +
    "Amount of Snack Per Day " + no_piece_per_day);
document.write("<br> " + "You Will Need " + ((max_Age - age) * 3) + " " + fav_Snack +
    " to last you until the ripe old age of " + max_Age);
// ==================== Chapter 5 end ====================
