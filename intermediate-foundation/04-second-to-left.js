/* Array: Second-to-Last: 
Return the second-to-last element of an array. 
Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null. */
const arr = [42, true, 4, "Liam", 7];
secondToLast = (arr) => {
  if (arr.length < 2) {
    return "null";
  } else {
    return arr[arr.length - 2];
  }
}
console.log(secondToLast(arr));