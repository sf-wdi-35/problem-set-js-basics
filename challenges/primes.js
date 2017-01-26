/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
//Prime is divisible only by self and 1
//check if any number between 1 and self divides the number
//if so, it's not prime
//1 is not consider to be prime

function isPrime(num) {
	for (var i = 2; i < num; i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return true;
}

isPrime(27)

function primes(max) {
	var prime = [];

	for (var i = 2; i <= max; i++) {
		if (isPrime(i)) {
			prime.push(i);
		}
	}
	return prime;
}

primes(30);