/* Fibonacci 
Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  
Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 
 Examples: 
 fibonacci(0) = 0 (given), 
 fibonacci(1) = 1 (given), 
 fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
 fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), 
 fibonacci(4) = 3 (1+2), 
 fibonacci(5) = 5 (2+3), 
 fibonacci(6) = 8 (3+5), 
 fibonacci(7) = 13 (5+8).  
 Do this without using recursion first.  
 If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment. */

//F(n) = F(n-1) + F(n-2)
//100%
fibonacci = (number) => {
  let previous_first = 0,
    previous_second = 1,
    next = 1;

  for (let i = 2; i <= number; i++) {
    next = previous_first + previous_second;
    previous_first = previous_second;
    previous_second = next;
  }
  return next;
}
console.log(fibonacci(7));

// //0.68% slow on tests !!!
// function fiboLoop(num) {
//   let a = 1;
//   let b = 0;
//   let temp = 0;

//   while (num >= 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//     console.log('num: ' + num);
//   }
//   return b;
// }
// fiboLoop(10);