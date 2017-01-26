/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE

var isPrime = function(num){
  var prime;
  if (num===1 || num===2 || num===3){
    return true;
  };
  for (i=2; i<(num); i++){
    if(num%i == 0){
      prime = false;
      return prime;
    } else {
      prime = true;
    }
  };
  return prime;
}

var primes = function(max){
  var primeArr = [];
  for (j=1; j<=max; j++){
    if (isPrime(j)){
      primeArr.push(j);
    }
  }
  return primeArr;
}
