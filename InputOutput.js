const input = require("readline-sync");

//Question No-1 Write a program to take three variables to store your birth date, birth month, and birth year, respectively, and then print them one by one in a specified order.

/*const date = Number(input.question("Enter the Date :-"));
const month = Number(input.question("Enter the Month :-"));
const year = Number(input.question("Enter the year :-"));
console.log(date);
console.log(month);
console.log(year);*/

//Question No-2  Write a program to take input from the user, and then print it to the output.

// const num = Number(input.question("enter the number :-"));
// console.log(num);

//Question No:-3  Write a program to take two values from the user and swap them. 


//----------------------------take input from prompt-------------------------


// let prompt = require ("prompt-sync")();

// let num1 = prompt("Enter the first number: ");
// let num2 = prompt("Enter the second number: ");

// let temp = num1;
// num1 = num2;
// num2 = temp;

// console.log("Swapped numbers:");
// console.log("Number 1:", num1);
// console.log("Number 2:", num2);




let num = Number(input.question("Enter the first number :-"));
if(num%10==0){
    console.log("good");
    
    
}
else{
    console.log("bad");
}



