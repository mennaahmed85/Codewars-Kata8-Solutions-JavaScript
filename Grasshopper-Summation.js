/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
*/


var summation = function (num) {
  let sum=0;
  for(let i=1;i<=num;i++)
     sum+=i;
  return sum;
}


// another solution 
var summation = function (num) {
  return Array(num).fill(0).reduce((acc,curr,index)=>acc+index+1,0)
}


// another solution 

var summation = function (num) {
  return num*(num+1)/2;
}