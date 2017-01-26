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
var isPalindrome = function(string){
  var str = string.replace(/[^a-zA-Z 0-9]/gi, "").toLowerCase().split("").reverse().join("");
  if (str == str.replace(/[^a-zA-Z 0-9]/gi, "").toLowerCase().split("").reverse().join("")){
    return "Palindrome!"
  } else {
    return "Not a Palindrome!"
  }
}
