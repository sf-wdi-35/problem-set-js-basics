/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE
//
console.log("palindrome-detector.js loaded");

var isPalindrome = function(string) {
// Replace all non alphabet elements and spaces with empty strings
		var str = string.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
// Print boolean if palindrome
    return(str === str.split('').reverse().join(''));
}

function printTests(arr) {
  for (var string of arr) {
    console.log(isPalindrome(string));
  }
}

printTests([
  "mom",
  "racecar",
  "stack cats",
  "Pull up if I pull up",
  "Amore, Roma.",
  "A man, a plan, a canal: Panama.",
  "these",
  "will not",
  "work!"
])
