const input = require("readline-sync");

// Questuon No- 1  Write a program to take two numbers from the user and determine the greater of those two given numbers.

// let num1 =Number(input.question("Enter the number :- "));
// let num2 =Number(input.question("Enter the number :- "));

// if(num1>num2){
//     console.log(num1);
// }
// else{
//     console.log(num2);
// }

// Question No:- 02   Write a program to take a number from the user and print that number as Odd or Even.

/*let num =Number(input.question("Enter the number :- "));

if(num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}*/

//Question No :- 03  Write a program to take a number from the user and output whether that number is negative, positive or zero.

// let num =Number(input.question("Enter the numbeer :- "));

/*if(num>=0){
    console.log("Positive/Zero");
}
else{
    console.log("Negtive");
}*/

// ------------------------------------------OR------------------------------------------------

/*if(num>0)
    console.log("positive");
else if(num<0)
    console.log("Negative");
else if(num==0){
    console.log("Zero");
    
} */

//Question No:- 04  Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.

/*let Integer =Number(input.question("Enter the number :- "));

if(Integer%2==0){
    console.log("Integer");
}
else{
    console.log(2*Integer);
    
}*/

//Question No:- 05  Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

/*let num1 =Number(input.question("Enter the number :- "));
let num2 =Number(input.question("Enter the number :- "));
let num3 =Number(input.question("Enter the number :- "));

if(num1>num2 && num1>num3){
    console.log(num1);
}
else if(num2>num1 && num2>num3){
    console.log(num2);
}
else{
    console.log(num3);
    
}*/

//Question No :-06  Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).

/*let num1 =Number(input.question("Enter the number :- "))
let num2 =Number(input.question("Enter the number :- "))
let num3 =Number(input.question("Enter the number :- "))
let num4 =Number(input.question("Enter the number :- "))

if(num1>num2 && num1>num3 && num1>num4){
    console.log(num1);
}
else if(num2>num1 && num2>num3 && num2>num4){
    console.log(num2);
}
else if(num3>num1 && num3>num2 && num3>num4){
    console.log(num3);
}
else{
    console.log(num4);
}*/

//Question No :-07 Write a program to take a year from the user and output whether a given year is a leap year or not.

/*let year =Number(input.question("Enter the year :- "));

if(year%400==0){
    console.log("Leap year");
}
else if(year%4==0){
    if(year%100!=0){
        console.log("Leap year");
    }
    else{
        console.log("No");
    }
}
else{
    console.log("No"); 
}*/

//Question No:- 08  Write a program to take 3 numbers from the user and output the second max of 3 numbers.

// let num1 =Number(input.question("Enter the number :- "));
// let num2 =Number(input.question("Enter the number :- "));
// let num3 =Number(input.question("Enter the number :- "));

// if(num1>num2 && num1>num3){
//     if( num2>num3){
//         console.log(num2);
//     }else{
//         console.log(num3);
//     }
// }
// else if(num2>num1 && num2>num3){
//     if( num1>num3){
//         console.log(num1);
//     }else{
//         console.log(num3);
//     }
// }
// else if( num1>num2){
//     console.log(num1);
// }else{
//     console.log(num2);
// }

// ----------------------------------2nd method-------------------------------------

// let num1 =Number(input.question("Enter the number :- "));
// let num2 =Number(input.question("Enter the number :- "));
// let num3 =Number(input.question("Enter the number :- "));

// let smax = 0
// let max = 0

// if (num1>num2){
//     max = num1
//     smax = num2
// }else{
//     max = num2
//     smax = num1
// }
// if (max>num3){
//     if(smax>num3){
//         smax = smax
//     }else{
//         smax = num3
//     }
// }else{
//     smax = max
//     max = num3
// }
// console.log(smax);

// Question No:- 09  Imagine you're working as a payroll manager in a company, and your job is to calculate the gross salary of employees based on their basic salary and certain allowances.
//The gross salary includes the basic salary along with House Rent Allowance (HRA) and Dearness Allowance (DA), which vary based on the employee's basic salary range.

// Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)

// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// let BasicSal =Number(input.question("Enter the BasicSal :- "));

// if (BasicSal<=10000){
//     hra =BasicSal/100*20
//     da =BasicSal/100*80
//     Gs = BasicSal+hra +da
//     console.log(Gs);
// }
// else if(BasicSal<=20000){
//     hra =BasicSal/100*25
//     da =BasicSal/100*90
//     Gs =BasicSal+hra+da
//     console.log(Gs);
// }
// else{
//     hra= BasicSal/100*30
//     da =BasicSal/100*95
//     Gs = BasicSal+hra+da
//     console.log(Gs);
// }

//Question No:-10   Imagine you're responsible for calculating electricity bills for households. Each household consumes electricity,
// and the bill varies based on the number of units consumed. The bill calculation involves different rates for different ranges of units consumed,
//along with an additional surcharge.

//  Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// --------------------1st type--------------------

// let unit =Number(input.question("Enter the unit :- "));

// if(unit<=50){
//     Bill= unit*0.5
//     Ac= Bill/100*20
//     TBill=Bill+Ac
//     console.log(TBill);
// }
// else if(unit<=150){
//     Bill=(50*0.5)+((unit-50)*0.75)
//     Ac= Bill/100*20
//     TBill= Bill+Ac
//     console.log(TBill);
// }
// else if(unit<=250){
//     Bill= (50*0.5)+(100*0.75)+((unit-150)*1.20)
//     Ac= Bill/100*20
//     TBill= Bill+Ac
//     console.log(TBill);
// }
// else{
//     Bill=(50*0.5)+(100*0.75)+(250*1.20)+((unit-250)*1.50)
//     Ac= Bill/100*20
//     TBill= Bill+Ac
//     console.log(TBill);
// }

// ---------------------------------2nd type---------------------------

// let unit =Number(input.question("Enter the unit :- "));

// let bill =0;

// if(unit<=50){
//     bill= unit*0.5;
// }
// else if(unit<=150){
//     bill=(50*0.5)+((unit-50)*0.75);
// }
// else if(unit<=250){
//    bill= (50*0.5)+(100*0.75)+((unit-150)*1.20);
// }
// else{
//     bill=(50*0.5)+(100*0.75)+(250*1.20)+((unit-250)*1.50);
// }

// let surcharge = bill/100*20;
// let totalBill = bill + surcharge;

// console.log(totalBill);

//Question No :-11  Write a program to take 4 numbers from the user and output the third max of these 4 numbers.

// let num1 = Number(input.question("Enter the number :- "));
// let num2 = Number(input.question("Enter the number :- "));
// let num3 = Number(input.question("Enter the number :- "));
// let num4 = Number(input.question("Enter the number :- "));

// let max = 0;
// let smax = 0;
// let tmax = 0;

// if(num1>num2){
//     tmax = 0
//     smax = num2
//     max = num1
// }
// else{
//     tmax = 0
//     smax = num1
//     max = num2
// }
// if(max>num3){
//     if(smax>num3){
//         if(tmax>num3){
//             tmax = tmax
//             smax = smax
//             max = max
//         }
//         else{
//             tmax = num3
//             smax = smax
//             max = max
//         }
//     }
//     else{
//         tmax = smax
//         smax = num3
//         max = max
//     }
// }
// else{
//     tmax = smax
//     smax = max
//     max = num3
// }
// if(max>num4){
//     if(smax>num4){
//         if(tmax>num4){
//             tmax = tmax
//             smax = smax
//             max = max
//         }
//         else{
//             tmax = num4
//             smax = smax
//             max = max
//         }
//     }
//     else{
//         tmax = smax
//         smax = num4
//         max = max
//     }
// }
// else{
//     tmax = smax
//     smax = max
//     max = num4
// }
// console.log(tmax);

//Question No:- 12  Write a program to take 5 numbers from the user and print the frequency of every number.

// let num1 = Number(input.question("Enter the number :- "));
// let num2 = Number(input.question("Enter the number :- "));
// let num3 = Number(input.question("Enter the number :- "));
// let num4 = Number(input.question("Enter the number :- "));
// let num5 = Number(input.question("Enter the number :- "));

//Question No:-next  if Age<10=Infinite, if Age<20=Child,  if Age<30=Middle, if Age<40=Senior,  if Age>40=Old

// let Age = Number(input.question("Enter the age :- "));

// if(Age<10){
//     console.log("infinite");
// }
// else if(Age<20){
//     console.log("Child");
// }
// else if(Age<30){
//     console.log("Middle");
// }
// else if(Age<40){
//     console.log("Senior");
// }
// else{
//     console.log("Old");
// }

// Question no:-13    Write a program  to calculate the electricity bill (Accept the number of units from the user) according to the following criteria:        		                                                   Unit	 					Price
// First 100 units                                               	no charge
// Next 100 units                                              	Rs 5 per unit
// After 200 units                                             	Rs 10 per unit
// (For example if input unit is 350 then total bill amount is Rs2000)

// let unit = Number(input.question("enter the Unit :- "));

// let Bill = 0;

// if (unit <= 100) {
//   Bill = unit * 0;
//   console.log(Bill);
// } else if (unit <= 200) {
//   Bill = 100 * 0 + (unit - 100) * 5;
//   console.log(Bill);
// } else {
//   Bill = 100 * 0 + 100 * 5 + (unit - 200) * 10;
//   console.log(Bill);
// }

// Question no:-14  Validate a given year.
// (Hints. The year in the date must be greater than zero, the months must lie between 1 and 12,
//     and the days must lie between 1 and 31, depending on the month numbers.)

// let year = Number(input.question("Enter the year :- "));
// let month = Number(input.question("Enter the month :- "));
// let date = Number(input.question("Enter the date :- "));

// if(year>0){
//     if(month>=1){
//         if(month<=12){
//             if(date>=1){
//                 if(date<=31){
//                     console.log("valid");

//                 }else{
//                     console.log("invalid");

//                 }
//             }else{
//                 console.log("invalid");

//             }
//         }else{
//             console.log("invaild");

//         }
//     }else{
//         console.log("Invalid");

//     }
// }else{
//     console.log("invalid");

// }

// Question no:-15    You have denominations of rupee notes in the following form—1, 2, 5, 10, 20, 100, 200, 500, 2000.
// Take any amount from the user and print the minimum number of notes needed to add up to that number.

// let n= Number(input.question("Enter the Number:- "));

// let c = 0;

// if(n>0){
//     if(n>=2000){
//         c = Math.floor(n/2000);
//         n = n%2000
//     }
//     if(n>=500){
//         c =  c + Math.floor(n/500)
//         n = n%500
//     }
//     if(n>=200){
//         c = c+ Math.floor(n/200)
//         n= n%200
//     }
//     if(n>=100){
//       c=  c+  Math.floor(n/100)
//       n = n%100
//     }
//     if(n>=50){
//         c= c+  Math.floor(n/50)
//         n= n%50
//     }
//     if(n>=20){
//         c = c+  Math.floor(n/20)
//         n = n%20
//     }
//     if(n>=10){
//         c = c+  Math.floor(n/10)
//         n = n%10
//     }
//     if(n>=5){
//         c = c+  Math.floor(n/5)
//         n = n%5
//     }
//     if(n>=2){
//         c = c+  Math.floor(n/2)
//         n = n%2
//     }
//     if(n>=1){
//         c = c+  Math.floor(n/1)
//         n = n%1
//     }
//     console.log(c);
// }

// Question no:- 16 Validate a given year.
//     (Hints. The year in the date must be greater than zero, the months must lie between 1
//     and 12, and the days must lie between 1 and 31, depending on the month numbers.)
//    Dependind on the leap year

// let year = Number(input.question("Enter the year:- "));
// let Month = Number(input.question("Enter the Month:- "));
// let Date = Number(input.question("Enter the Date:- "));

// if(year!=0 && Month!=0 && Date!=0){
//     if(year%400==0){
//         if(Month==2 && Date<=29){
//             console.log("valid");

//         }
//         else if (Month==4 || Month==6 || Month==9 || Month==11 && Date<=30){
//             console.log("valid");
//         }
//         else if(Month==1 || Month==3 || Month==5 || Month==7 || Month==8 || Month==10 || Month==12 && Date<=31){
//             console.log("valid");

//         }
//         else{
//             console.log("invalid");

//         }
//     }
//     else if(year%100==0){
//         if(Month==2 && Date<=28){
//             console.log("valid");

//         }
//         else if(Month==4 || Month==6 || Month==9 || Month==11 && Date<=30){
//             console.log("valid");

//         }
//         else if(Month==1 || Month==3 || Month==5 || Month==7 || Month==8 || Month==10 || Month==12 && Date<=31){
//             console.log("valid");

//         }
//         else{
//             console.log("invalid");

//         }
//     }
//     else if(year%4==0){
//         if(Month==2 && Date<=29){
//             console.log("valid");

//         }
//         else if(Month==4 || Month==6 || Month==9 || Month==11 && Date<=30){
//             console.log("valid");

//         }
//         else if(Month==1 || Month==3 || Month==5 || Month==7 || Month==8 || Month==10 || Month==12 && Date<=31){
//             console.log("valid");

//         }
//         else{
//             console.log("invalid");

//         }
//     }
//     if(Month==2 && Date<=28){
//         console.log("valid");

//     }
//     else if(Month==4 || Month==6 || Month==9 || Month==11 && Date<=30){
//         console.log("valid");

//     }
//     else if(Month==1 || Month==3 || Month==5 || Month==7 || Month==8 || Month==10 || Month==12 && Date<=31){
//         console.log("valid");

//     }
//     else{
//         console.log("invalid");

//     }
// }
// else{
//     console.log("invalid");

// }

// Question no:-17   Accept the age, gender (‘M’, ‘F’), and the number of days and display the wages accordingly
//If the age does not fall in any range then display the following message: “Enter appropriate age”

//Age                             Sex                                 Wage/day

//  >=18 and <30                    M                                   700
//                                  F                                   750
//  >=30 and <=40                   M                                   800
//                                  F                                   850

// let age = Number(input.question("Enter Your Age: "));
// let gender = String(input.question("Enter Your Gender (M/F): "));
// let days = Number(input.question("Enter The Number Of Days Worked: "));

// let wagePerDay;

// if (age >= 18 && age < 30) {
//   if (gender === "M") {
//     wagePerDay = 700;
//   } else if (gender === "F") {
//     wagePerDay = 750;
//   } else {
//     console.log("Invalid gender entered.");
//   }
// } else if (age >= 30 && age <= 40) {
//   if (gender === "M") {
//     wagePerDay = 800;
//   } else if (gender === "F") {
//     wagePerDay = 850;
//   } else {
//     console.log("Invalid gender entered.");
//   }
// } else {
//   console.log("Enter appropriate age.");
// }
// let totalWages = wagePerDay * days;
// console.log(totalWages);

// Question no:-18  Accept the number of days from the user and calculate the charge for the library
// according to the following:
// First five days:      Rs 2/day
// Next 5 days:          Rs 3/day
// Next 5 days:          Rs 4/day
// After 15 days:        Rs 5/day

// let numberOfDay = Number(input.question("Enter the Number Of Day :- "));
// let libraryCharge = 0;
// if(numberOfDay <= 5){
//     libraryCharge = numberOfDay * 2;
//     console.log(libraryCharge);
// }
// else if(numberOfDay <= 10){
//     libraryCharge = (5 * 2)+(numberOfDay - 5)*3
//     console.log(libraryCharge);
// }
// else if(numberOfDay <= 15){
//     libraryCharge = (5 * 2)+(5 * 3)+(numberOfDay - 15)*4
//     console.log(libraryCharge);
// }
// else{
//     libraryCharge = (5 * 2)+(5 * 3)+(5 * 4)*5
//     console.log(libraryCharge);
// }

// Question No:- 19  Construct a flowchart to categorize the shape of a quadrilateral as either a square,
// rhombus, rectangle, parallelogram, or irregular quadrilateral, having input the lengths of
// the four sides and one internal angle.

// let side1 = Number(input.question("Enter the lenght1 :-"));
// let side2 = Number(input.question("Enter the lenght2 :-")); //side 1,2,3,4 are the length of four sides of quadrilateral.
// let side3 = Number(input.question("Enter the legth3 :-"));
// let side4 = Number(input.question("Enter the lenght4 :-"));
// let angle = Number(input.question("Enter the angle :-")); // angle=90 because the shaps like square and rectangle...

// if (side1 === side2 && side3 === side4) {
//   if (angle === 90) {
//     console.log("quadrilateral is square ");
//   } else {
//     console.log("quadrilateral is not square , it's rhombus");
//   }
// } else if (side1 === side3 && side2 === side4) {
//   if (angle === 90) {
//     console.log("Rectangle");
//   } else {
//     console.log("parallelogram");
//   }
// } else {
//   console.log("irregular quadrilateral");
// }

// Question No:- 20   The grades in a certain class are determined by coursework and a written examination.
// Both components of the assessment carry a maximum of 50 points.
// (i) A student must score a total of 45% or more in order to pass
// (ii) A total grade of 44% is moderated to 45%
// (iii) Each component must be passed with a minimum of 20 points
// (iv) If a student scores 45% or more, but does not achieve the minimum grade in
// one component, he is given a technical fail of 44%, which is not moderated to 45%
// Print whether the student has passed or failed and also the course total.

// let courseworkScore = Number(input.question("Enter the courseworkScore Number :-"));
// let examScore = Number(input.question("Enter the examScore Number :- "));

// let totalscore = courseworkScore + examScore;
// let totalPercentage = (totalscore / 100) * 100;
// if (courseworkScore < 20 || examScore < 20) {
//   if (totalPercentage >= 45) {
//     console.log("technical fail - 44%");
//   } else {
//     console.log("fail" + totalscore );
//   }
// } else if (totalPercentage >= 45) {
//   console.log("Pass with percentage"   +   totalPercentage + "%");
// } else if (totalPercentage === 44) {
//   console.log("pass with moderated precentage-45% ");
// } else {
//   console.log("falied with totalpercentage" + totalPercentage + "%");
// }

// Question No :- 21  The following rules are used to calculate the bonus for the employees of an organization.

// (i) If the pay is more than $3,000, the bonus amount is fixed, and it is equal to $300.
// (ii) If the pay is more than $1,600, but less than or equal to $3,000, the bonus will be 10% of the pay subject to a maximum of $240.
// (iii) If the pay is less than or equal to $1,600, the bonus is 15% of pay, subject to a minimum of $100.

// let salary = Number(input.question("Enter the Employee salary :-"));
// let bonus = 0;
// if (salary > 3000){
//     bonus = 300;
// }else if (salary > 1600 && salary <= 3000){
//     bonus = salary*10/100;
//     if(bonus > 240){
//         bonus = 240;
//     }

// }else if(salary <= 1600){
//     bonus = salary*15/100;
//     if (bonus < 100){
//         bonus = 100;
//     }
// }
// console.log(bonus);

// Question No:-22 A certain steel is graded according to the following conditions:
// (i) Rockwell-hardness > 50
// (ii) Carbon content > 0.7
// (iii) Tensile strength > 5600 kg/cm2
// The steel is graded as follows:
// a. Grade 10, if all the conditions are satisfied
// b. Grade 9, if conditions (i) and (ii) are satisfied
// c. Grade 8, if conditions (ii) and (iii) are satisfied
// d. Grade 7, if conditions (i) and (iii) are satisfied
// e. Grade 0, otherwise

// let RockwellHardness = Number(input.question("Enter the Rockwell Hardness :- "));
// let CarbonContent = Number(input.question("Enter the Carban Content :- "));
// let TensileStrength = Number(input.question("Enter the Tensile Strength (kg/cm2) :- "));
// let Grade = 0;

// if (RockwellHardness > 50 && CarbonContent > 0.7 && TensileStrength > 5600) {
//   Grade = 10;
// } else if (RockwellHardness > 50 && CarbonContent > 0.7) {
//   Grade = 9;
// } else if (CarbonContent > 0.7 && TensileStrength > 5600) {
//   Grade = 8;
// } else if (RockwellHardness > 50 && TensileStrength > 5600) {
//   Grade = 7;
// } else {
//   Grade = 0;
// }
// console.log("The steel Grade is", Grade);

// Question no:-23  Accept three integers representing the angles of a triangle in degrees to determine
// whether they form a valid set of angles of a triangle. If it is not a valid set, then generate
// a message and terminate the process. If it is a valid set, then the process determines
// whether it is equiangular (all three angles are the same). It also determines if the
// triangle is right-angled (has one angle with 90 degrees), obtuse-angled (one angle above
// 90), or acute-angled (all three angles are below 90 degrees). Finally, it shows the
// conclusion about the triangle.

// Question No:-24  Write a program to show how to determine the greater of the three given numbers.
// let num1 = Number(input.question("Enter the First Number :- "));
// let num2 = Number(input.question("Enter the Second Number :- "));
// let num3 = Number(input.question("Enter the Third Number :- "));

// console.log(Math.max (num1,num2, num3));

// Question No:-25 Write a program to take two sides as input and check whether it is a rectangle or a square.

// let side1 = Number(input.question("Enter The Side One Number :- "));
// let side2 = Number(input.question("Enter the Side Two Number :- "));
// if(side1 === side2 ){
//     console.log("Square");

// }else{
//     console.log("Rectangle");

// }

// // Question No:- 26 Write a program to check whether a number is the smallest 4 digit number.
// let num1 = Number(input.question("Enter the First Number :- "));
// let num2 = Number(input.question("Enter the Second Number :- "));
// let num3 = Number(input.question("Enter the Third Number :- "));
// let Num4 = Number(input.question("Enter the Fourth Number :- "));
// console.log(Math.min (num1,num2,num3,Num4));

// Question NO:-27 Write a program to check whether a number is divisible by 7 or not.

// let num = Number(input.question("Enter the Number for check Number is Divisible by 7 or Not :- "));
// if(num % 7 ==0){
//     console.log("Nuber is divisible by 7");
// }else{
//     console.log("Number is not divisible by 7");
// }

// Question No:-28 Write a program to check whether a person is eligible for voting or not. Age for voting is 18 years

// let age = Number(input.question("Enter the age :- "));
// if(age >=18){
//     console.log("Eligible for vote");
// }else{
//     console.log("Not Eligible");
// }

// Question No:-29 Write a program to display "Hello" if a number entered by the user is a multiple of five , otherwise print "Bye"

// let num = Number(input.question("Enter the Number :- "));
// if(num % 5 === 0){
//     console.log("Hello");
// }else{
//     console.log("Bye");
// }

// Question No:-30 Write a program to check whether a number entered is a three digit number or not.

// let num = Number(input.question("Enter the number :- "));
// if(num > 99 && num <= 999){
//     console.log("yes");
// }else{
//     console.log("No");
// }

// Question No:-31  Write a program to check whether a person is a senior citizen or not(Senior citizen Age=60)
// let age = Number(input.question("Enter the age :- "));
// if(age >= 60){
//     console.log("Senior Citizen");
// }else{
//     console.log("Not Senior Citizen");
// }

// Question NO:-32  Accept the temperature in degrees Celsius of water and check whether it is boiling temperature or not (boiling point of water is 100 C).
// let temperature = Number(input.question("Enter the temperrature :- "));
// if (temperature >= 100) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

// Question No:-33   A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000. Ask the user for quantity,
//  Suppose, one unit will cost 100. Judge and print total cost for the user.

// let quantity = Number(input.question("Enter the quantity :- "));
// let costPerUnit = 100;
// // let discount = 10;
// totalCost = quantity * costPerUnit;
// if (totalCost > 1000) {
//   totalCost = totalCost - (totalCost * 10) / 100;
//   console.log(totalCost);
// }

// Question No:-34  A company decided to give a bonus of 5% of his salary to an employee if his/her year of service is
//  more than 5 years. Ask users for their salary and year of service and print the bonus amount

// let salary = Number(input.question("Enter the employee salary :- "));
// let year = Number(input.question("Enter the Employee year of service :- "));

// let bonus = (salary * 5) / 100;
// if (year > 5) {
//   console.log(`Bonus Amount Will be : ${bonus}`);
// } else {
//   console.log("Employee didn't compleate Year");
// }

// Question No:-35  Write a program to check whether a number is the 4 digit number and it should be divisible
//  by 7 and its quotient after dividing with 7 should be even.

// let num = Number(input.question("Enter the Number :- "));
// if (num >= 1000 && num <= 9999) {
//   if (num % 7 === 0 && (num / 7) % 2 === 0) {
//     console.log(
//       "This number is 4 digit and also divisible by 7 and the quotient is even");
//   } else {
//     console.log("the Number is not follow the condition");
//   }
// } else {
//   console.log("Please enter the 4 digit number");
// }

// Question No:-36 Write a program to take two numbers as input and print their difference if the first number
//  is greater than the second number, otherwise print their sum.

// let num1 = Number(input.question("Enter the first number :- "));
// let num2 = Number(input.question("Enter the second number :- "));
// let different = 0;
// let sum = 0;

// if (num1 > num2) {
//   different = num1 - num2;
//   console.log(`here ${num1} is greater then ${num2} so output will be : ${different}`);
// } else {
//   sum = num1 + num2;
//   console.log(`Here ${num1} is not greater then ${num2} so output will be : ${sum}`);
// }

// Question NO:-37  Write a program to obtain a number N and increment its value by 1 if the number is divisible by 4, otherwise, decrement its value by 1. Test cases:

// let num = Number(input.question("Enter the number :- "));

// if(num % 4 ==0){
//     num ++;
//     console.log(num);
// }else{
//     num--;
//     console.log(num);
    
// }

// Question No:- 38  Write a program to obtain 2 numbers (A and B) and an arithmetic operator (C) and then 
// design a calculator depending upon the operator entered by the user

// let A = Number(input.question("Enter the first Number :- "));
// let B = Number(input.question("Enter the second Number :- "));
// let C = input.question("Enter the Arithmetic Operator (+, -, *, /) :- ");
// let Result ;
// if(C === "+"){
//     Result = A + B;
// }else if(C === "-"){
//     Result = A - B;
// }else if(C === "*"){
//     Result = A * B;
// }else if(C === "/"){
//     if(B !== 0){
//         Result = A / B;
//     }else{
//         console.log("Error: Division by zero is not allowed.");
//     }
// }else{
//     console.log("In.valid operator entered");
// }
// if (Result !== undefined) {
//     console.log("The result is: " + Result);
// }

// Question No:-39 


