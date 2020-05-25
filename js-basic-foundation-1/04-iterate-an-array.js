//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
const arr = [-5,2,5,12]; //14
addAllArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    return sum;
}
addAllArray(arr);

