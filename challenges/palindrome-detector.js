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


// Checks for equality between string[i] & (string[string.length-1]-i).
var isPalindrome = function(str){
  for (var i=0; i<str.length; i++){
    if (str[i] !== (str[(str.length-1)-i])){
      return false;
    } else {
      return true;
    }
  }
}

// Input, function calls, & output
var input = 'racecar';
var output = isPalindrome(input);
console.log(output);

var input = 'spacecar';
var output = isPalindrome(input);
console.log(output);
