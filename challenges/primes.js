/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
function isPrime(num){
	var num = Number(num);
	for(var i = 2; i< num; i++){
		if(num % i === 0){
			return false;
		}
	}
	return true;
}

function primes(max){
	var arr = [];
	var max = Number(max);
	for(var i=1; i<max; i++){
		if(isPrime(i)){
			arr.push(i);
		}
	}
	return arr;
}