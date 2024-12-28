/*
Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

Example
With the numbers 1, 2, and 3, here are some possible expressions:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
The maximum value that can be obtained is 9.
*/

function expressionMatter(a, b, c) {
  let result=[];
  result.push(a+b+c);
  result.push(a*b*c);
  result.push(a+b*c);
  result.push(a*b+c);
  result.push((a+b)*c);
  result.push(a*(b+c));
  result.sort((a,b)=>b-a);
  return  result.sort((a,b)=>b-a)[0];
}
