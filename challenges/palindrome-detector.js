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

// To Do: remove punctuation, lowercase, remove spaces, compare forward order with reverse order.

var isPalindrome = function(str) {
  var string = str.replace(/[,.:]/g, "").toLowerCase();
  var i = 0;
  while (i < string.length) {
    if (string[i] != string[(string.length - 1) - i]) {
      return false;
    } else {
      return true;
    }
  }
}
