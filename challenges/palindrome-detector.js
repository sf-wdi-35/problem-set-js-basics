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

var testo = prompt("What palindrome are we checking?");
// query for word or phrase to check
var isPalindrome = function() {
  //make string into array
    var letterCheck = testo.split("");
// loop array values in reverse, into backward check
    for (var i = letterCheck.length; i >=0; i -= 1) {
    var backward[] = letterCheck[i];
  }
// check backward vs forward spelling
    if (letterCheck === backward) {
      return "true";
    } else {
      return "false";
    };
};


/* playground

var backward = [];

//compare values
if (letterCheck === backward) {
  return "true";
} else {
  return "false";
};
*/
