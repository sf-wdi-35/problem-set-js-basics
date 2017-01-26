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
  string = string.toLowerCase();
  var wordArr = []
  for (i=0; i<string.length; i++){
    if(string[i].match(/^[a-zA-Z]+$/)){
      wordArr.push(string[i]);
    };
  };
  var wordBack = wordArr.slice();
  wordBack = wordBack.reverse();
  var palindrome;
  for (i=0; i<string.length; i++){
    if(wordBack[i] != wordArr[i]){
      palindrome=false;
      return palindrome;
    } else {
      palindrome=true;
    }
  }
  return palindrome;
}
