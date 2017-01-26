/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

var isPrime = function(num) {
  for (var i = 2; i < num; i++) {
//It took a couple tries to figure out why var i = 1 would pop errors
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var primes = function(max) {
  if (isPrime() === true)
}
