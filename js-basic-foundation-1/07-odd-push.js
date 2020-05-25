//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
oddPush = () => {
    let result = [];
    for (i = 0; i <= 50; i++){
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}
oddPush();
