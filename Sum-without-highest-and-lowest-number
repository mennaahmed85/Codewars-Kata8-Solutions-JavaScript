/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
*/ 



function sumArray(array) {
 if(array==null ) return 0 ;
// return array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,curr)=>acc+curr,0);
// another solution 
 let sum=0;
  array.sort((a,b)=>a-b);
  for(let i=1;i<array.length-1;i++)
    sum+=array[i];
  return sum;
}
