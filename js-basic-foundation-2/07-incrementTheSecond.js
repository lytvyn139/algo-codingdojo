/* Increment the Seconds 
Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc). 
Afterward, console.log each array value and return arr. */

let arr = [1, 5, 3, 2, 8, 6];

console.log(`arr before: ${arr}`);
incrementTheSeconds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] += 1;
      console.log(`arr: ${arr[i]}`)
    }
  }
  return arr;
}

let z = incrementTheSeconds(arr);
console.log(`arr after: ${arr}`);