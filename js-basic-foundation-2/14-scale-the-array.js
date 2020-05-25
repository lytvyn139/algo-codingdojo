/* Scale the Array 
Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  
For example, scaleArray([1,2,3], 3) should return [3,6,9]. */
const arr = [1, 2, 3];
const scale = 3;

scaleTheArray = (arr, scale) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * scale);
  }
  return result;
}

scaleTheArray(arr, scale);