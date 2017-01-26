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

// take word and split the number of letters in half, or minus 1 if odd

// function isItAPalindrome(str){
//   var srtArr = str.split("").toLowerCase().replace(/[?!-:;,.]+/g,"");
//   var strArrHalf =  // split string array in 2 halves
//                     // compare reversed half with 1st half
// }
// to be continued...

// compare i and -i i.e. two arrays that move in opposite directions


function isPalindrome(word){
  var onlyLettersWord = word.toLowerCase().replace(/[?!-:;,.]+/g,""); //need more details on what can and cannot go into replace()
  var lettersArr = onlyLettersWord.split("");
  return word == lettersArr.reverse().join("");

}



// function isPalindrome(word){        // OR double and reverse word and compare
//   var originalLettersArr = word.split("");
//   var revLetters = originalLettersArr.reverse();
//   var revLettersArr = revLetters.join("");

//   if (originalLettersArr == revLettersArr){
//     return true
//   } else {
//     console.log("Not a Palindrome...whomp whomp")
//   }
// }

