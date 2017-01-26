/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(Math.floor(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primes(max) {
var primesArr = [];
  for (var i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primesArr.push(i);
    }
  }
  return primesArr;
}
