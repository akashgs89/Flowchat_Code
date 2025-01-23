const input = require("readline-sync");

// let arr = [1,2,3,4];

// console.log(arr.length);
// console.log(arr[2]);
// arr[2]=2322
// console.log(typeof arr);
// console.log(arr.toString());   // convert into the string (this is the method of array)

// Question no:-01  Write a program to print all the numbers from the given array using a loop.
//                  L = {23, 45, 32, 25, 46,33, 71, 90}

// NOTE:- we can do  this type but we'll to give input from the user and also array of length.

// let arrLength = Number(input.question("Enter the arr of length :- "));
// let arr = [];
// for (let i = 0; i < arrLength; i++) {
//   arr[i] = Number(input.question("Enter the arrInput :- "));
// }
// console.log(arr);
// for (let j = 0; j < arrLength; j++) {
//   console.log(arr[j]);
// }

// NOTE:-  We can do also this type there is given array

// let Num = [23, 45, 32, 25, 46, 33, 71, 90];
// for (let arr of Num) {
//   console.log(arr);
// }

// Question no:-02  Write a program to create an array of natural numbers till 20 and print it.

// let arrLength = Number(input.question("Enter the arrLength :- "));

// let arr = [];
// for (let i = 0; i < arrLength; i++) {
//   arr[i] = Number(input.question("Enter the Netural Number :- "));
// }
// console.log(arr);
// for (let j = 0; j < arrLength; j++) {
//   console.log(arr[j]);
// }

// Question no:- 03  Write a program to reverse the array and print the reversed array.

// let arrLength = Number(input.question("Enter the Number :- "));
// let arr = [ ];
// for(let i = 0; i<arrLength; i++){
//     arr[i]= Number(input.question("Enter the Number for reverse:= "));
// }
// console.log(arr);
// for(let j = arrLength-1; j>=0; j--){
//     console.log(arr[j]);
// }

// Question No :-04   Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

// let arrLength = Number(input.question("Enter the size of arry:- "));
// let arr = [];
// for (i = 0; i < arrLength; i++) {
//   arr[i] = Number(input.question("Enter the Number := "));
//   console.log(arr[i]);
// }
// let target = Number(input.question("enter the number for check="));
// let found = false;

// for (k = 0; k < arrLength; k++) {
//   if (arr[k] == target) {
//     console.log("yes");
//     found = true;
//     break;
//   }
// }
// if (!found) {
//   console.log("no");
// }
// ------------------------------------We can do also like this --------------------------------

// let arr = [1,2,3,4,5,6,7];
// console.log(arr.includes(6));

// -------------------------------------End-----------------------------------------------------

// Question no:-5   Write a program to print the sum of all the odd numbers and even numbers in the given array.
// 23 45 32 25 46 33 71 90
// let arrLength = Number(input.question("Enter the Arrlength :- "));
// let arr = [];
// for (let i = 0; i < arrLength; i++) {
//   arr[i] = Number(input.question("Enter the Number = "));
// }
// let evenSum = 0;
// let oddSum = 0;
// for (let j = 0; j < arrLength; j++) {
//   if (arr[j] % 2 == 0) {
//     evenSum += arr[j];
//   } else {
//     oddSum += arr[j];
//   }
// }
// console.log(evenSum);
// console.log(oddSum);

// Question no:-06   Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.

// let arrLength = Number(input.question("Enter the Arrlength = "));
// arr = [];
// for (let i = 0; i < arrLength; i++) {
//   arr[i] = Number(input.question("Enter the Number at index= "));
// }
// for (let j = 0; j < arrLength; j++) {
//   for (let k = j + 1; k < arrLength; k++) {
//     if (arr[j] == arr[k]) {
//       console.log(arr[k]);
//     }
//   }
// }

// Question no :- 07  Write a program to take N numbers from the user and print the frequency of every number.

// let arrLength = Number(input.question("Enter the Number of element:- "));
// let arr = [];
// for (let i = 0; i < arrLength; i++) {
//   arr[i] = Number(input.question(`Enter the Number at Index ${i}:- `));
// }
// let frequency = {};
// for (let i = 0; i < arr.length; i++) {
//   let count = arr[i];
//   if (frequency[count]) {
//     frequency[count]++;
//   } else {
//     frequency[count] = 1;
//   }
// }
// console.log("frequency of Number: ");
// for (let key in frequency) {
//   console.log(`${key}: ${frequency[key]}`);
// }

// --------------------We can do also like this-----------------------

// let arrLength = Number(input.question("Enter the Number of element :- "));
// let arr = [];

// for (let i = 0; i < arrLength; i++) {
//   arr[i] = Number(input.question(`Enter the Number at Index ${i}: `));
// }

// console.log("frequency of each Number");

// for (let i = 0; i < arrLength; i++) {
//   let count = 1;
//   let duplicate = 0;
//   for (let j = 0; j < i; j++) {
//     if (arr[i] === arr[j]) {
//       duplicate = 1;
//       break;
//     }
//   }
//   if (duplicate === 1) {
//     continue;
//   }
//   for (j = i + 1; j < arrLength; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//   }
//   console.log(arr[i] + ":" + count);
// }

// Question no:-08  Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)

// let arrLength1 = Number(input.question("Enter the Number Of Element for the first Array:- "));
// let arrLength2 = Number(input.question("Enter the Number Of Element for the first Array:- "));

// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < arrLength1; i++) {
//   arr1[i] = Number(input.question(`Enter the Number for First Array At Index ${i} : `));
// }
// for (let j = 0; j < arrLength2; j++) {
//   arr2[j] = Number(input.question(`Enter the Number for Second Array At Index ${j} : `));
// }
// let mergedArray = [];
// let i = 0;
// j = 0;
// k = 0;

// while (i < arrLength1 && j < arrLength2) {
//   if (arr1[i] < arr2[j]) {
//     mergedArray[k] = arr1[i];
//     i++;
//   } else {
//     mergedArray[k] = arr2[j];
//     j++;
//   }
//   k++;
// }
// while (i < arrLength1) {
//   mergedArray[k] = arr1[i];
//   i++;
//   k++;
// }
// while (j < arrLength2) {
//   mergedArray[k] = arr2[j];
//   j++;
//   k++;
// }
// console.log("Merged Array");
// for (let l = 0; l < arrLength1 + arrLength2; l++) {
//   console.log(mergedArray[l]);
// }
