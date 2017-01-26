/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
var isPrime = function(n){
  if (n === 0){
    return "Not a prime number";
  } else if (n === 1){
    return "Not a prime number";
  } else if (n === 2){
    return "Prime number";
  } else {
    for (var x = 2; x < n; x++){
      if (n % x === 0){
        return "Not a prime number";
      } else {
        return "Prime number";
      }
    }
  }
}