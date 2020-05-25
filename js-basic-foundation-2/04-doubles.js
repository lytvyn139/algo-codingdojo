/* Double Vision  
Given an array (similar to saying 'takes in an array'), 
create a function that returns a new array where each value in the original array has been doubled.  
Calling double([1,2,3]) should return [2,4,6] without changing the original array. */

const arr = [1, 5, 10, -2];

double = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);

  }
  return result;

}
let z = double(arr);
console.log(z)