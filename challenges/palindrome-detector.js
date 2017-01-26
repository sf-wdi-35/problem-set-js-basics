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

var isLetter = function(char) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for(var i = 0; i < alphabet.length; i++) {
    if(char === alphabet[i]) { //word[i]
      return true;
    }
  }

  return false;
}

var isPalindrome = function(str) {
  var lc = str.toLowerCase();
  var word = lc.split(''); //['r', 'a', 'c', 'e', 'c'. 'a', 'r'];
  var arr = [];
  var arr2 = [];

  for(var i = 0; i < word.length; i++) {
    if(isLetter(word[i]) === true) {
      arr.push(word[i]);
      arr2.unshift(word[i]);
    }
  }
  if(arr.join() === arr2.join()) {
    return true;
  }
  return false;
}
