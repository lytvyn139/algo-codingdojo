/* Print One, Return Another - Build a function that takes in an array of numbers.  
The function should print the second-to-last value in the array, and return the first odd value in the array. */

const arr = [1, 6, 7, -315, 1, 7];

printOneReturnAnother = (arr) => {
  const copyArr = arr;
  copyArr.unshift();
  console.log(copyArr);
  //first value was removed, now will print the: second to last values
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      return arr[i];
    }
  }
}

var z = printOneReturnAnother(arr);
console.log(z);