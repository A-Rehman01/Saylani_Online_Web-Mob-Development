// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
var multi_Arry = new Array();
multi_Arry[0] = new Array(4);

//  2. Declare and initialize a multidimensional array representing the following matrix: 
var multi_Arry = new Array();
multi_Arry[0] = new Array(4);
multi_Arry[1] = new Array(4);
multi_Arry[2] = new Array(4);

multi_Arry[0][0] = 0;
multi_Arry[0][1] = 1;
multi_Arry[0][2] = 2;
multi_Arry[0][3] = 3;

multi_Arry[1][0] = 1;
multi_Arry[1][1] = 0;
multi_Arry[1][2] = 1;
multi_Arry[1][3] = 2;

multi_Arry[2][0] = 2;
multi_Arry[2][1] = 1;
multi_Arry[2][2] = 0;
multi_Arry[2][3] = 1;

document.write("<br>");
for (var i = 0; i < 3; i++) {
    document.write("<br>");
    for (var j = 0; j < 4; j++) {
        document.write(multi_Arry[i][j]);
    }
}

//3. Write a program to print numeric counting from 1 to 10.  
document.write("<br>");
document.write("<br>");
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//4.  Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.
document.write("<br>");
document.write("<br>");
var input_Table_number = +prompt("Enter Table Number");
var input_Table_lenght = +prompt("Enter Table lenght");
document.write((" Table of :").bold() + input_Table_number + "<br>" + ("Lenght of table is :").bold() + input_Table_lenght + " <br> ");
for (var i = 1; i <= input_Table_lenght; i++) {
    document.write(input_Table_number + " x " + i + " = " + input_Table_number * i + "<br>")
}

//5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<br>");
document.write("<br>");
fruits.forEach((list) => {
    document.write((list).bold() + "<br>");
});
document.write("<br>");
for (var i = 0; i < fruits.length; i++) {
    document.write("Element of index " + i + " is " + fruits[i] + "<br>")
}


//6. Generate the following series in your browser. See example output. 
document.write("<br>");
document.write("<br>");
document.write(("Counting").bold() + "<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}
document.write("<br>");
document.write(("Reverse Counting").bold() + "<br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}
document.write("<br>");
document.write(("Even").bold() + "<br>");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ",");
}
document.write("<br>");
document.write(("Odd").bold() + "<br>");
for (var i = 1; i < 20; i += 2) {
    document.write(i + ",");
}
document.write("<br>");
document.write(("Series").bold() + "<br>");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "K, ");
}

//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//Write a program to enable “search by user input” in an array
document.write("<br>");
document.write("<br>");
var serah_arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Enter items i tell you wheather its availabe or not");
input = input.toLowerCase();
var check = 0;
for (var i = 0; i <= serah_arr.length; i++) {
    if (serah_arr[i] === input) {
        document.write("<br>" + "cookie is " + ("available ").bold() + "at index " + i + " in our Bakery");
        check = 1;
    }
}
if (check === 0) {
    document.write("<br>" + "we are soory.  " + input + " is " + (" not available ").bold() + "in our Bakery");
}

//8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
var arr_Largest = [24, 53, 78, 91, 12];
document.write("<br>");
document.write("<br>");
document.write("Array Items " + arr_Largest + "<br>");
var largest = arr_Largest[0];
for (var i = 0; i <= arr_Largest.length; i++) {
    if (largest < arr_Largest[i]) {
        largest = arr_Largest[i];
    }
}

document.write("<br>" + "The largest number is :" + largest);


//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
var arr_Smallest = [24, 53, 78, 91, 12];
document.write("<br>");
document.write("<br>");
document.write("Array Items " + arr_Smallest + "<br>");
var smallest = arr_Smallest[0];
for (var i = 0; i <= arr_Smallest.length; i++) {
    if (smallest > arr_Smallest[i]) {
        smallest = arr_Smallest[i];
    }
}
document.write("<br>" + "The Smallest number is :" + smallest);

//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("<br>");
document.write("<br>");
for (var j = 0; j <= 100; j += 5) {
    if (j < 96) {
        document.write(j + ", ");
    }
    else {
        document.write(j + " ");
    }
}