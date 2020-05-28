/* Evens and Odds  
Create a function that accepts an array.  
Every time that array has three odd values in a row, print "That's odd!".  
Every time the array has three evens in a row, print "Even more so!".*/

// my code
const arr = [1, 3, 7, 10, 6, 8, 10];
evensAndOdds = () => {
  let countOdd = 0;
  let countEven = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countEven++;
      if (i !== 0 && countOdd !== 0) countOdd = 0;
    } else if (arr[i] % 2 !== 0) {
      countOdd++;
      if (i !== 0 && countEven !== 0) countEven = 0;
    }
    if (countOdd === 3) {
      console.log("That's odd!");
      countOdd = 0;
    } else if (countEven === 3) {
      console.log("Even more so!");
      countEven = 0;
    }
  }
};
let z = evensAndOdds(arr);

// teachers code :'(
// const arr = [1, 3, 7, 10, 6, 8, 10];
// evensAndOdds = () => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
//       console.log('Odd');
//       i += 2;
//     } else if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
//       console.log('Even more so');
//       i += 2;

//     }
//   }
// }
// evensAndOdds(arr);