/* Array: Nth-to-Last: 
Return the element that is N-from-array's-end.  
Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
 */
const arr = [5, 2, 3, 6, 4, 9, 7];
const param = 3;

nFromArrEnd = (arr, param) => {
  if (arr.length < 2) {
    return "null";
  } else {
    return arr[arr.length - param];
  }
}
console.log(nFromArrEnd(arr, param));