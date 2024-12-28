/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/

function removeEveryOther(arr){
  //your code 
  let result=[];
  for(i=0;i<arr.length;i++){
    if(i%2===0)
      result.push(arr[i]);
  }
  return result;
}

//another solution

function removeEveryOther(arr){
  //your code 
  return arr.filter((x,i)=>i%2===0);
}
