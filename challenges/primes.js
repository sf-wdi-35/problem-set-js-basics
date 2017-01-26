/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
var isPrime = function(num) {
  for(i=2;i<num;i++) {

    if (num ==1) {
      return true;
      break
    }
    else if (num%i == 0) {
       var divisible = true;
       break
    } else {
       divisible = false;
    }
  }
  if(!divisible) {
    return true
  } else {
    return false
  }
};
