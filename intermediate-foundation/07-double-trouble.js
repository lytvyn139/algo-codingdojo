/* Double Trouble: 
Create a function that changes a given array to list each existing element twice, retaining original order. 
Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false]. */

let arr = [4, "Ulysses", 42, false];
doubleTrouble = () => {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(arr[i]);
  }
  arr = newArr;
  return arr;
}
console.log(doubleTrouble(arr));