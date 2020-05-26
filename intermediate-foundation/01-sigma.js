/* Sigma - Implement function sigma(num) 
that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5). */

const num = 5;
sigma = (num) => {
  const sum = [];
  for (let i = 0; i <= num; i++) {
    if (sum === sum + i);
    sum.push(i);
  }
  return sum;
}
console.log(sigma(num));