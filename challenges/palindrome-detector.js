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


function isPalindrome(word) {
  var arrword = word.split("");
  // console.log(arrword)
  var backarr = arrword.reverse();
  // console.log(backarr)
  var backword = backarr.join("");
  // console.log(backword)

  if (backword == word) {
    console.log("true")
  }
  else {
    console.log("false")
  }
}

isPalindrome("racecar");
isPalindrome("sdfghjk");