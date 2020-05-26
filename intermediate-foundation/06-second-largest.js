/* Array: Second-Largest: 
Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7. 
 If the array is too short, return null. */

const arr = [42, 1, 4, 3.14, 7, 40];
//const arr = [7, 40];

secondLargest = (arr) => {
  let firstBiggest = 0;
  let secondBiggest = 0;
  if (arr.length < 3) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > firstBiggest) {
        secondBiggest = firstBiggest;
        firstBiggest = arr[i];
      } else if (arr[i] > secondBiggest && arr[i] < firstBiggest)
        secondBiggest = arr[i];
    }
  }
  return secondBiggest;
}
console.log(secondLargest(arr));