const input = require("readline-sync");

// Questuon No- 10  Write a program to take two numbers from the user and determine the greater of those two given numbers.

// let num1 =Number(input.question("Enter the number :- "));
// let num2 =Number(input.question("Enter the number :- "));

// if(num1>num2){
//     console.log(num1);
// }
// else{
//     console.log(num2);
// }

// Question No:- 11   Write a program to take a number from the user and print that number as Odd or Even.

/*let num =Number(input.question("Enter the number :- "));

if(num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}*/

//Question No :- 12  Write a program to take a number from the user and output whether that number is negative, positive or zero.

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

//Question No:- 13  Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.

/*let Integer =Number(input.question("Enter the number :- "));

if(Integer%2==0){
    console.log("Integer");
}
else{
    console.log(2*Integer);
    
}*/

//Question No:- 14  Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

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

//Question No :-15  Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).

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

//Question No :-16 Write a program to take a year from the user and output whether a given year is a leap year or not.

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

//Question No:- 17  Write a program to take 3 numbers from the user and output the second max of 3 numbers.

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

// Question No:- 18  Imagine you're working as a payroll manager in a company, and your job is to calculate the gross salary of employees based on their basic salary and certain allowances.
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

//Question No:-19   Imagine you're responsible for calculating electricity bills for households. Each household consumes electricity,
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

//Question No :-20  Write a program to take 4 numbers from the user and output the third max of these 4 numbers.

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

//Question No:- 21  Write a program to take 5 numbers from the user and print the frequency of every number.

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

// Question no:-23    Write a program  to calculate the electricity bill (Accept the number of units from the user) according to the following criteria:        		                                                   Unit	 					Price
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

// Question no:-24  Validate a given year.
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

// Question no:-25    You have denominations of rupee notes in the following form—1, 2, 5, 10, 20, 100, 200, 500, 2000.
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

// Question no:- 26 Validate a given year.
//     (Hints. The year in the date must be greater than zero, the months must lie between 1
//     and 12, and the days must lie between 1 and 31, depending on the month numbers.)

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

// Question no:-27   Accept the age, gender (‘M’, ‘F’), and the number of days and display the wages accordingly
//If the age does not fall in any range then display the following message: “Enter appropriate age”

//Age                             Sex                                 Wage/day

//  >=18 and <30                    M                                   700
//                                  F                                   750
//  >=30 and <=40                   M                                   800
//                                  F                                   850

let age = Number(input.question("Enter the age :- "));
let gender = String(input.question("Enter the gender (M/F) :- "));
let day = Number(input.question("Enter the wageperday :-"));

let wageperday;

if (age >= 18 && age <= 30) {
  if (gender === "m") {
    wageperday = 700;
  } else if (gender === "F") {
    wageperday = 750;
  } else {
    console.log("Enter the valid gender");
  }
} else if (age >= 30 && age <= 40) {
  if (gender === "M") {
    wageperday = 800;
  } else if (gender === "F") {
    wageperday = 850;
  } else {
    console.log("Enter the valid gender");
  }
} else {
  console.log("Enter appropriate age");
}
let totalWages = wageperday * day;
console.log(totalWages);

// let age = Number(input.question("Enter your age: "));
// let gender = String(input.question("Enter your gender (M/F): "));
// let days = Number(input.question("Enter the number of days worked: "));

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
