/* Factorial 
Write a function factorial(num) that, given a number, returns the product (multiplication) of all
 positive integers from 1 up to the given number (inclusive).  
 For example, 
 factorial(3) = 6 (or 1*2*3); 
 factorial(5) = 120 (or 1*2*3*4*5) */

//100%
factorial = (n) => {
  let ans = 1;
  for (let i = 2; i <= n; i++)
    ans = ans * i;
  return ans;
}
console.log(factorial(10));

//67% slow 
getFactorial = (n) => {
  //base case
  if (n === 1 || n === 0) {
    return n;
  } else
    return n * getFactorial(n - 1);
}
console.log(getFactorial(10));