//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
// (e.g. [1,5,10,-2] will become [1,25,100,4])
const arr = [1,5,10,-2];
getSqaures = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.pow(arr[i],2));
    
  }
  return result;
}
let z = getSqaures (arr);
console.log(z)


