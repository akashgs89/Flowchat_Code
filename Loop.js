const input = require("readline-sync");

//Question No;-01  Take the number N and the name from the user as inputs, and print the name N times.

// let N = Number(input.question("Enter the Number:- "));
// let name = String(input.question("Enter the name:- "));

// for(let i=1; i<=N; i++){
//     console.log(name);
// }

// i=1;
// while(i<=N){
//     console.log(name);
//     i++
// }

// Question No:-02  Imagine you're on a fun journey of exploring numbers! You're interested in
//finding out all the even numbers up to a certain value. Even numbers are those that are divisible
//by 2 without leaving a remainder. Your task is to print all the even numbers from 1 up to the number
//you choose.

//Take a number N from the user as input, and print even numbers up to N.

// let N = Number(input.question("Enter the number :- "));

// for(let i=1; i<N; i++){
//     if(i%2==0)
//         console.log(i);
// }

// Question no:-03  Imagine you're on an adventurous quest to unravel the mysteries of numbers! Today,
//your quest involves exploring the realm of odd numbers. Odd numbers are those that are not divisible by
//2, leaving a remainder of 1. Your task is to calculate the sum of all the odd numbers up to a certain
//value chosen by you.

//Write a program to print the sum of odd numbers up to N.

// let N = Number(input.question("Enter the number:- "));

// let sum=0;

// for(let i=1; i<N; i++){
//     if(i%2!=0){
//         sum=sum+i
//         console.log(i);
//     }
// }
//         console.log("sum of odd:-", sum);

// Question No:-04 Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

// let M = Number(input.question("Enter the number:- "));
// let N = Number(input.question("Enter the number:- "));

// let sum = 0;

// for(; M<=N; M++){
//     sum=sum+M
// }
// console.log(sum);

// -----------------------------  ---------------------------------

// let sum=0;
// while(M<=N){
//     sum=sum+M
//     M++
//     console.log(sum);

// }
// console.log("print sum of number =", sum);

// Question no:-05 Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

// let N = Number(input.question("Enter nummber :- "));

// let sum = 0;

// for(i=1; i<=N; i++){
//     sum+=1/i
//     console.log(1/i);

// }
// console.log("print sum :", sum);

//Question no:-06  Write a program to take a number from the user and print the sum of the digits of the given number.

// let N = Number(input.question("ENter the number :- "));

// let sum = 0;
// let A = 0;

// while(N>0){
//     A = N%10
//     sum = sum+A
//     N = Math.floor(N/10)
//     console.log(sum);

// }
// console.log("print sum :", sum);

// Question no:-07 Write a program to take a number from the user and print the number of digits in the given number. (can you do it without  loop O(1) )

// let N = Number(input.question("Enter the number :- "));

// for(i=1; N!=0; i++){
//     N = Math.floor(N/10)
//     console.log(i);

// }

// Question no:-08 Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

// let N = Number(input.question("Enter the number :- "));

// let d=0;
// let rev=0;

// while(N!=0){
//     d = N%10
//     rev = rev*10+d
//     N = Math.floor(N/10)
//     console.log(d);

// }
// console.log("reverse Number :", rev);

// Question no:- 09 Factors question

// let N = Number(input.question("Enter the number :- "));

// for(i=1; i<=N; i++){
//     if(m= N%i==0){
//         console.log(i);
//     }
// }

// Question no:-10   (Factorial question)

// let N = Number(input.question("Enter the number :- "));

// let f = 1;

// for(i=1; i<=N; i++){
//     f=f*i
//     console.log(f);

// }
// console.log("factorial no : ", f);

// Question no:-11  Write a program to check if a number is a special type of number called
//a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't
//have any other factors.

// let n = Number(input.question("Enter the number :- "));

// let count = 0;

// for(i=1; i<=n; i++){
//     if(n%i==0){
//         count++
//     }
// }
// if(count==2){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// Question no:-12  Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.

// let N = Number(input.question("Enter the Number:- "));
// let k=N
// let sum = 0;

// for(let i=1; N>i; i++){
//   if(N%i==0){
//     sum=sum+i
//   }
// }
// if(k==sum){
//   console.log("it is perfect number");

// }
// else{
//   console.log("it is not perfect number");

// }

// Question no:-13  Fibonacci series

// let a=0;
// let b=1;
// let n=10
// let c=0;

// console.log(a);
// console.log(b);

// for(let i=0; i<=n; i++){
//      c=a+b;
//      console.log(c);
//      a=b;
//      b=c;

// }

//   Question no:-14   Armstrong Number

// let n = Number(input.question("Enter the number:- "));
// let sum = 0;
// let temp = n;
// let remainder;

// while (temp > 0) {
//   remainder = temp % 10;
//   temp = Math.floor(temp / 10);
//   // temp = parseInt(temp/10);   // Math.floor and parseInt both are using for integer
//   sum = sum + remainder ** 3;
// }
// if (sum == n) {
//   //    console.log(`${n} is Armstrong number`);
//   console.log("Armstrong Number");
// } else {
//   //console.log(`${n} is not Armstron Number`);  // when we have to print that number so use a back tick and also use $
//   console.log("Not Armstrong Number");
// }



// Questin no:-15  Palindrome Number


