/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
// Checks to see if a given number is prime or not.
var isPrime = function(num){
  if (num <= 1){
    return false;
  } else if (num === 2){
    return true;
  } else {
      for (var i=2; i<num; i++){
        if((num % i) === 0){
        return false;
     }
   }
 }
  return true;
}
var output = isPrime(9);
console.log(output);

// Creates a custom array of prime numbers up to a max value.
var primeArray = []

var primes = function(max){
  for (var i=2; i<max; i++){
    if(isPrime(i)){
      primeArray.push(i);
    }
    continue;
  }
  return primeArray;
}

var output = primes(347);
console.log(output);
