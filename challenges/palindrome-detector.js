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
function isPalindrome(x) {
  var parsedString = "";
  var regex = /^[a-z]/g;
  var splitX = x.toLowerCase().split("");
  splitX.forEach(function(el) {
    if (el.match(regex)) {
      parsedString += el;
    }
  });

  if (parsedString === parsedString.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }

}
// These should all return TRUE
console.log(isPalindrome("mom"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stack cats"));
console.log(isPalindrome("Pull up if I pull up"));
console.log(isPalindrome("Amore, Roma."));
console.log(isPalindrome("A man, a plan, a canal: Panama."));

// These should all return FALSE
console.log(isPalindrome("these"));
console.log(isPalindrome("will not"));
console.log(isPalindrome("work!"));
