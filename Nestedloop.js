const input = require("readline-sync");

// Question no:-1  Triangle Pattern

//       1
//       1 2
//       1 2 3
//       1 2 3 4
//       1 2 3 4 5

// IN this process 1st take a outer loop then inner loop and also take a empty string and in inner loop also take
//a string+ = innere loop var.. and if you want to gap in all number then you have to take + empty string (+ '') then
// then console string.

// for(a=1; a<=5; a++){
//     let str=''
//     for(b=1; b<=a; b++){
//         str+=b+ ' '
//     }
//     console.log(str);
// }

// ------IN this process like same process but when we'll use process.stdout.writetake a back tick (``) and also a $
//besically this ($) use for digit which is showing---------------

// for(a=1; a<=5; a++){
//     for(b=1; b<=a; b++){
//         process.stdout.write(`${b}`)
//     }
//     console.log();
// }

// -----------------HEre also is same process just we can take input from the usre---------

// let n=Number(input.question("Enter the value of n:"))
// for(a=1; a<=n; a++){
//     let str='';
//     for(b=1; b<=a; b++){
//         str+="* "
//     }
//     console.log(str);
// }

//-----------------this is for also star-----------------------
//-----------------we can use this for also digit just remove * and use whatever you taken variable---------------

// for(a=1; a<=5; a++){
//     for(b=1; b<=a; b++){
//         process.stdout.write('*')
//     }
//     console.log();
// }

// Question no:- 2  Triangle Pattern
//        1
//        12
//        123
//        1234
//        12345
//        123456
//        1234567
//        12345678
//        123456789
//        12345678910

// for (a = 1; a <= 10; a++) {
//   let str = " ";
//   for (b = 1; b <= a; b++) {
//     str += b;
//   }
//   console.log(str);
// }

// Question no:-3   Triangle Pattern

//      1
//      2 2
//      3 3 3
//      4 4 4 4
//      5 5 5 5 5

// for (a = 1; a <= 5; a++) {
//   let str = " ";
//   for (b = 1; b <= a; b++) {
//     str += a + " ";
//   }
//   console.log(str);
// }

//  Question no:- 4 Triangle Pattern
//      1
//      2 3
//      4 5 6
//      7 8 9 10

// let str = "";
// count = 1;

// for (a = 1; a <= 4; a++) {
//   let str = "";
//   for (b = 1; b <= a; b++) {
//     str += count + " ";
//     count++;
//   }
//   console.log(str);
// }

//  Question no:- 5 Triangle Pattern

//      1
//      12
//      123
//      124
//      12345
//      123456

// for (let i = 1; i <= 6; i++) {
//   let str = "";

//   for (let j = 1; j <= i; j++) {
//     str += j;
//   }
//   if (i === 4) {
//     str = str.replace("3", "");
//   }

//   console.log(str);
// }

//Question no:-6  Reverse Triangle

//      12345
//      1234
//      123
//      12
//      1

// for(i=5; i>=1; i--){
//     let str= ""
//     for(j=1; j<=i; j++){
//         str+=j

//     }
//     console.log(str);

// }

// Question no:-7  Number Pyramid Pattern — I

//        1
//       123
//      12345
//     1234567
//    123456789

// let n = 5;
// for (i = 1; i <= n; i++) {
//   str = "";
//   for (k = 1; k <= n - i; k++) {
//     str += " ";
//   }
//   for (j = 1; j <= 2 * i - 1; j++) {
//     str += j;
//   }
//   console.log(str);
// }

// Question no:-8 Number Pyramid Pattern — II

//       1
//      234
//     56789

// let n = 3;
// let count = 1;
// for (i = 1; i <= n; i++) {
//   let str = "";
//   for (k = 1; k <= n - i; k++) {
//     str += " ";
//   }
//   for (j = 1; j <= 2 * i - 1; j++) {
//     str += count;
//     count++;
//   }

//   console.log(str);
// }

// Question no:-9  Star Patterns

//      *****
//      *****
//      *****
//      *****
//      *****

// for(i=1; i<=5; i++){
//    let str = ''
//    for(j=1; j<=5; j++){
//     str+="*"
//    }
//    console.log(str);

// }

// Question  no:10  Hollow Square Star Pattern

//   *****
//   *   *
//   *   *
//   *   *
//   *****

// for (let i = 1; i <= 5; i++) {
//     let str = '';
//     for (let j = 1; j <= 5; j++) {
//         if (i == 1 || i == 5 || j == 1 || j == 5) {
//             str += '*';
//         } else {
//             str += ' ';
//         }

//     }
//     console.log(str);
// }

// Question no:11 Right Triangle Pattern

//        *
//       **
//      ***
//     ****
//    *****

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let k = 1; k <= n - i; k++) {
//     str += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// Questiion no:-12   Left Triangle Pattern

//       *
//       **
//       ***
//       ****
//       *****

// for (let i = 1; i <= 5; i++) {
//   str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// Question no:-13  Pyramid Triangle Pattern

//        *
//       ***
//      *****
//     *******
//    *********

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   str = "";
//   for (let k = 1; k <= n - i; k++) {
//     str += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// Question no:-14  Reverse Triangle — I

//       54321
//       5432
//       543
//       54
//       5

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let str = " ".repeat(i);
//   for (let j = n; j > i; j--) {
//     str += j;
//   }
//   console.log(str);
// }

// Question no:-17  Reverse Triangle — II

//       54321
//       4321
//       321
//       21
//       1

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = " ";
//   for (let j = n - i + 1; j >= 1; j--) {
//     str += j;
//   }
//   console.log(str);
// }

// Question no:-18  Hollow Triangle Star Pattern

//       *
//       **
//       * *
//       *  *
//       *   *
//       ******

// let n = 6;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   if (i === 1) {
//     str += "*";
//   } else if (i === n) {
//     for (k = 1; k <= n; k++) str += "*";

// Question no:-19   Write a program to take a input from the user and print the prime number between 1 to 20.

// let n=20;
// for (let i = 2; i <= n; i++) {
//   str = "";
//   let c = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       c++;
//     }
//   }
//   if (c == 2) {
//     console.log(i);
//   }
// }