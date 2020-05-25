//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
const arr = [1,3,5,7,20];
findAvg = (arr) => {
    let avg = 0;
    for (let i = 0; i<arr.length; i++)     {
        avg += arr[i]
    }
    return avg / arr.length
}
findAvg(arr);
