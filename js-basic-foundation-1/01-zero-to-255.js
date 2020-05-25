//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

const arr = 255;
arrPrint = (arr) =>  {
    let newArr = [];
    for (let i = 1; i <= arr; i++) {
        newArr.push(i)
    }
    return newArr;
}
arrPrint(arr);


