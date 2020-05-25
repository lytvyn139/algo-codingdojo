//Number to String - Write a function that takes an array of numbers and replaces any negative values within 
//the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
const arr = [-1,-3,2];
negativeToDojo = (arr) => {
  let result = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return result;
}
let z = negativeToDojo (arr);
console.log(z)


