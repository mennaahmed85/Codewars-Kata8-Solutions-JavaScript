/*
Write a function which converts the input string to uppercase.
*/


function makeUpperCase(str) {
  // Code here
   return str.split('').map((x)=>x.toUpperCase()).join('');
}
