//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the 
///maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5]) 
const arr = [1, 5, 10, -2];

function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    arr.forEach(function(value) {
        if (value > max)
            max = value;
        if (value < min)
            min = value;
        sum += value;
    })
    let avg = sum / arr.length;
    return [max, min, avg];
}
let final = maxMinAvg(arr);
console.log(final);
