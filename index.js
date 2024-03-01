// EXAMPLE 1 - Make includes() case insensitive in JavaScript

const str = 'HELLO WORLD';
const substr = 'hELLo';

// 👇️ true
console.log(str.toLowerCase().includes(substr.toLowerCase()));

if (str.toLowerCase().includes(substr.toLowerCase())) {
  // 👇️ this runs
  console.log('The substring is contained in the string');
} else {
  console.log('The substring is NOT contained in the string');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Ignoring case Check if Array contains String - Array.findIndex

// const names = ['John', 'Bob', 'Adam'];
// const name = 'ADAM';

// const index = names.findIndex(element => {
//   return element.toLowerCase() === name.toLowerCase();
// });

// console.log(index); // 👉️ 2

// if (index !== -1) {
//   // 👇️ this runs
//   console.log('The string is contained in the array');
// } else {
//   console.log('The string is NOT contained in the array');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Ignoring Case Check if Array contains String - Array.some()

// const names = ['John', 'Bob', 'Adam'];
// const name = 'JOHN';

// const includesValue = names.some(element => {
//   return element.toLowerCase() === name.toLowerCase();
// });

// console.log(includesValue); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Ignoring Case Check if Array contains String - Array.find()

// const names = ['John', 'Bob', 'Adam'];
// const name = 'ADAM';

// const result = names.find(element => {
//   return element.toLowerCase() === name.toLowerCase();
// });

// console.log(result); // 👉️ 'Adam'

// ------------------------------------------------------------------

// // EXAMPLE 5 - Perform a case-insensitive check if a string is in an array using filter()

// const arr = ['HELLO', 'HeLlO', 'WORLD'];
// const str = 'HeLLo';
// const matches = arr.filter(element => {
//   return element.toLowerCase() === str.toLowerCase();
// });

// console.log(matches); // 👉️ ['HELLO', 'HeLlO']

// if (matches.length > 0) {
//   // 👉️ at least 1 match found in array
// }
