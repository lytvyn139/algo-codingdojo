/* Outlook: Negative  
Given an array, create and return a new one containing all the values of the original array, 
but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5]. */

const arr = [1, -5, -3, 3];

outlookNegative = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i] -= arr[i] * 2)
      //or use newArr.push(-Math.abs(arr[i]));
    } else newArr.push(arr[i])
  }
  return newArr;
}

let z = outlookNegative(arr);
console.log(z);