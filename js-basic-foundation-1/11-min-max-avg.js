//:wq  Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the 
///maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5]) 
const arr = [1, 5, 10, -2];

maxMinAvg = (arr) => {
  const result = [];
  const max = arr[0];
  const min = arr[0];
  let avg = 0;
  //maximum
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      result[0] = arr[i];
    }
    //minimum
    if (arr[i] < min) {
      result[1] = arr[i];
    }
    //avg
    avg += arr[i] / arr.length;
    result[2] = avg;
  }
  return result;
}

let final = maxMinAvg(arr);
console.log(final);
