/* Swap Toward the Center - 
Given an array, swap the first and last values, third and third-to-last values, etc. 
Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time. */

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [true, 42, "Ada", 2, "pizza"];

swapTowardCenter = (arr) => {
  let firstLastTemp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = firstLastTemp;

  let thirdToLast = arr[2];
  arr[2] = arr[arr.length - 3];
  arr[arr.length - 3] = thirdToLast;
  return arr;
  console.log(arr);
}

swapTowardCenter(arr);
