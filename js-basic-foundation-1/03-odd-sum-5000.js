//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

const num = 5000;
sumOdd = (num) =>  {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
sumOdd(num);





