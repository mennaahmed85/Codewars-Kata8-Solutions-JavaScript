/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
  // your code here
  if(input == null || input.length ===0) return [];
  let sumPos=0;
  let sumNeg=0;
  for(let i=0;i<input.length ;i++){
       input[i]>0?sumPos++:sumNeg+=input[i];
  }
  return [sumPos,sumNeg];
}


// another solution 

function countPositivesSumNegatives(input) {
  // your code here
  if(input == null || input.length ===0) return [];
  let sumPos = input.filter((x)=>x>0).length;
  let sumNeg = input.filter((x)=>x<0).reduce((acc,curr)=>curr+acc,0);
  return [sumPos,sumNeg];
}
