const input =require("readline-sync")

// Quetion No-4    Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.


// let num1= Number(input.question("Enter the value :-"));
// let num2= Number(input.question("Enter the value:-"));

// let addition = num1 + num2;
// let subtraction = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;   
// let integerDivision = Math.floor(num1 / num2);
// let modulus = num1 % num2;

// --------------------------------1st type start print---------------------------------
// console.log("Results:");
// console.log("Addition:", addition);
// console.log("Subtraction:", subtraction);
// console.log("Multiplication:", multiplication);
// console.log("Division:", division);   
// console.log("Integer Division:", integerDivision);
// console.log("Modulus:", modulus);

// ---------------------------2nd type print----------------------------


// console.log("Results:");
// console.log(addition);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);   

// console.log(integerDivision);
// console.log(modulus);

// -------------------------------3rd type start-------------------------------------------

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);


//Question No:-5 Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.

// let num1= Number(input.question("Enter the number :-"));
// let num2= Number(input.question("Enter the number :-"));

// let division = num1/num2;
// let mod = num1%num2; 

// console.log(division);
// console.log(mod);


//Qustion No:-6  Write a program to take a positive number from the user and then display the last digit of that number.

// let positive num = Number(input.question("Enter the number :- "));
// let mod = positive num%10;
// console.log(mod);


//Question No:-7  Write a program to take two inputs from the user and swap them without using a temporary or third variable.

// let num1 = Number(input.question("Enter the first number :- "));
// let num2= Number(input.question("Eter the second number :-  "));

// ---------------------1st rule---------------------------

// num1=num1+num2;
// num2=num1-num2;
// num1=num1-num2;
// -------------------------2nd rule--------------------------
// num1= num1*num2;
// num2=Math.floor(num1/num2);
// num1=Math.floor(num1/num2);

// console.log(num1,num2);


//Question No:-8  Write a program to convert a temperature from Celsius to Fahrenheit using the formula  C/5 = (F-32)/9


// let Celsius= Number(input.question("Enter the number :- "));

//  Fahrenheit= Celsius*9/5+32;
// console.log(Fahrenheit);

//Questionn No:-9  Write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?


// let num1= Number(input.question("Enter the number :- "));
// let num2= Number(input.question("Enter the number :- "));

// let floor = Math.floor(num1/num2);
// let multiplication= floor*num2;
// console.log(multiplication);


//  Question No:- 10  Create a program that asks the user for two numbers, adds them together,
//   and then displays the result. Here are a few examples of inputs and expected outputs:

// let num1 = Number(input.question("Enter the First Number :- "));
// let num2 = Number(input.question("Enter the Second Number:- "));
// let sum = 0;
// console.log(`sum: ${num1+num2}`);

// Question No:-11   Create a program that takes two numbers from the user and calculates their average.

// let num1 = Number(input.question("Entet the First Number :- "));
// let num2 = Number(input.question("Entet the Second Number :- "));
// let Add = 0;
// let Avg = 0;
// Add = num1 + num2;
// Avg = Add/2
// console.log(`Avg : ${Add/2}`);


// Question NO :-12  Write a program to show how to swap the values of two variables.

// let num1 = Number (input.question("Enter the First Number :- "));
// let num2 = Number(input.question("Enter the Second Number :- "));
// let temp = 0;
// temp = num1;
// num1 = num2;
// num2 = temp;
// console.log( "Swaped Number is :" ,   num1, "And "+  num2);


// Question No:- 13  Write a program to show how to swap the values of two variables without using a third variable.

// let num1 = Number(input.question("Enter the First Number :- "));
// let num2 = Number(input.question("Enter the Second Number :- "));

// num1 = num1*num2;
// num2 = Math.floor (num1/num2);
// num1 = Math.floor (num1/num2);
// console.log( "Swaped Number is : " , num1,num2);


// Question No:- 14  Write a program to calculate the area and perimeter of a rectangle.(Input length and breadth of the rectangle from the user)

// let width = Number(input.question("width :- "));
// let length = Number(input.question("length :- "));

// // Area = A = l × w
// // Perimeter = P = 2(l + w)
// let Area = length * width;
// let perimeter = 2*(length + width);
// console.log(`Area : ${area}`);
// console.log(`perimeter : ${perimeter}`);


// Question No:-15 Write a program to calculate the area and perimeter of a square.(Input side length of the square from the user)

// let length = Number(input.question("Enter the length :- "));

// // Area of a Square = side × side
// // Perimeter of a Square = 4 x side

// let area = length * length;
// let perimeter = 4 * length;
// console.log(`area : ${area}`);
// console.log(`perimeter : ${perimeter}`);


// Question No:- 16  You want to find out how much space is inside a circle this space is also called as Area.
//  To do this, you need to know the length from the center of the circle to its edge. This length is called the
//   radius. Your task is to create a program that will print the area of circle. (take π = 3.14)
// formula π * (radius)^2

// let radius = Number(input.question("Enter the redius :- "));
// let π = 3.14;
// let areaOfCircle = 0;
// areaOfCircle = π * (radius**2);
// console.log(`Area of circle with radius : ${areaOfCircle}`);

// Question No:- 17   You want to find out the diameter of a circle when you know its circumference.
//  The diameter is the distance across the circle through its center. To do this, you need to create a program
//   that takes the circumference of the circle as input from the user and then calculates the diameter of the 
//   circle. (take π = 3.14)
// formula : Diameter = Circumference / π

// let Circumference = Number(input.question("Enter the Circumfrence :- "));
// let π = 3.14;
// let diameter = 0;
// diameter = Circumference / π;
// console.log(`Diameter is : ${diameter}`);


// Question No:- 18 write a program to calculate the surface area of a cube. A cube is a box-like shape where
//  all sides are the same length. There are two types of surface areas we can calculate: the lateral surface area 
//  and the total surface area.

// let sideLength = Number(input.question("Enter the One Side Length :- "));
// let lateralSurface = 0;
// let totalSurface = 0;

// // lateral Surface = 4 * side**2  (4a^2)
// // total Surface = 6 * side**2    (6a^2)   

// lateralSurface = 4 * (sideLength ** 2);
// totalSurface = 6 * (sideLength**2);

// console.log(`Lateral surface of cube : ${lateralSurface}`);
// console.log(`Total surface of Cube : ${totalSurface}`);


// Question No:-19  You have a cube, which is a 3D shape with all sides of equal length. Your task is to 
// write a program that can find the volume of this cube. To do that, you need to know the length of one side
//  of the cube.

// let sideOfCube = Number(input.question("Enter the Side length of Cube :- "));
// // cube volume = side**3

// let CubeVolume = 0;
// CubeVolume = sideOfCube**3;
// console.log(`Volume of Cube : ${CubeVolume}`);


// Question NO:-20 You need to create a program that takes a positive number as input from the user and then
//  displays the last digit of that number.

// let num = Number(input.question("Enter the Number :- "))
// let lastDigit = 0;
// lastDigit = num%10;
// console.log(`Last Digit Of That Number : ${lastDigit}`);


// Question No:-21   Write a program to calculate remainder when a is divided by b.

// let num1 = Number(input.question("Enter the First number :- "));
// let num2 = Number(input.question("Enter the Second Number :- "));
// let remainder = 0;
// remainder = num1%num2
// console.log(`Remainder Of That Number : ${remainder}`);

// Question No:-22  Write a program that asks the user for their name, then displays a welcome message on the screen in the format "Welcome [name]".

// let Name = String(input.question("Enter the Name :- "));
// console.log(`Welcome ${Name}`);

// Question No:-23  Imagine a rectangular box, like a shoebox, which is called a cuboid. It has three different lengths: length, width,
//  and height. The problem is about finding two things:
// 1. Lateral Surface Area: This is the total area of the four sides of the cuboid, excluding the top and bottom faces.
//  2. Total Surface Area: This includes the area of all six sides of the cuboid.


// formula for lateral surface area of cuboid : = 2 * height * (length + width)
// formula for Total surface area of cuboid : = 2 * (length * width + width * height + height * length)

// let length = Number(input.question("Enter the lenght :- "));
// let width = Number(input.question("Enter the width :- "));
// let height = Number(input.question("Enter the height :- "));

// let LSA = 0;   //lateral surface area of cuboid
// let TSA = 0;   // total surface area of cuboid

// LSA = 2 * height * (length + width);
// TSA = 2* (length * width + width * height + height * length)

// console.log(`Lateral Surface Area of Cuboid : ${LAS}`);
// console.log(`Total Surface Area of Cuboid : ${TSA}`);


// Question No:-24         Write a program to calculate the volume of a cuboid

// formula for volume of cuboid = Length × Width × Height

// let lenght = Number(input.question("Enter the Length :- "));
// let width = Number(input.question("Enter the Width :- "));
// let height = Number(input.question("Enter the Height :- "));

// let volumeOfCuboid = 0;
// volumeOfCuboid = lenght * width * height;
// console.log(`Volume of Cuboid : ${volumeOfCuboid}`);

// Question No:-25 You want to create a program that calculates the selling price of a product when you know the Maximum Retail Price (MRP)
//  and the discount percentage. The program should take inputs from the user, the MRP, and the discount percentage, and then it should calculate 
//  and display the selling price of the product after applying the discount.

// let MRP = Number(input.question("Enter the Product MRP :- "));
// let DS = Number(input.question("Enter the Product Discount :- "));   // Discount
// let SP = 0;   // Selling Price
// SP = MRP - (MRP * DS / 100)

// console.log(`Selling Price : ${SP}`);


// Question No:-26  Write a program to calculate the square of a number. 

// let num = Number(input.question("Enter the Number :- "));
// let square = 0;
// square = num **2;   // Calculate the square
// console.log(`Number Of Square : ${square}`);


// Question No:-27 Write a program to calculate the cube of a number.

// let num = Number(input.question("Enter the number :- "));
// let cube = 0;
// cube = num**3;
// console.log(`Number Of Cube : ${cube}`);


// Question No:28 Write a program to calculate how many books we can buy if we have x Rs . (Cost of a book = Rs. y)(input x,y from user)

// let money = Number(input.question("Enter the Amount Of Money You Have (Rs). "));
// let price = Number(input.question("Enter the price of one book (Rs). "));
// let numberOfBook = 0;
// numberOfBooks = Math.floor (money / price)
// console.log(`Number Of Book : ${numberOfBook}`);
// // console.log(`You can buy ${numberOfBooks} book in  ${money} rupees`);


// Question No:29 write a program to find out how many Pens can be bought if one pen costs Rs. 5 take the money from the user.
// let money = Number(input.question("Enter the money yuo have (Rs).  "));
// let price = 5;
// let numberOfPen = Math.floor (money/5);
// console.log(`you can buy ${numberOfPen} pen in ${money} ruppes `);

// Question No;- 30 Write a program to calculate the total marks obtained by a student in examination. (Subjects : - Hindi, Maths, English, Science, Computer)
// (Input marks of all 5 subjects from the user)
let subjectHindi = Number(input.question("Enter the Subject mark :- "));
let subjectMath = Number(input.question("Enter the Math Mark :- "));
let subjectEnglish = Number(input.question("Enter the ENglish Mark :- "));
let subjectScience = Number(input.question("Enter the Science Mark :- "));
let subjectComputer = Number(input.question("Enter the Computer Mark :- "));

let totalMark = 0;

totalMark = subjectHindi + subjectMath + subjectEnglish + subjectScience + subjectComputer;
console.log(`Total Marks obtained by Student In Examination : ${totalMark}`);










