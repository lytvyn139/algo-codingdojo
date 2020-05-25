/* Print Low, Return High 
Create a function that takes in an array of numbers.  
The function should print the lowest value in the array, and return the highest value in the array. */

const arr = [2, 45, -99, 24, 77];

printLowReturnHigh = () => {
    //who needs loops right?
    console.log(Math.min(...arr));
    return Math.max(...arr);
}
let z = printLowReturnHigh();
console.log(z);