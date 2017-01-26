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
  var letters = /^[A-Za-z]+$/;
  string = string.toLowerCase();
  console.log(string);
  var length = string.length;
  wordArray = []
  for(var i =0; i < length; i++){
    if(string[i].match(letters)){
      wordArray.push(string[i]);
    }
  }
  console.log(wordArray)
  if(wordArray.length%2 === 0){
    var i = wordArray.length / 2;
    console.log("i=",i);
  }else{
    var i = (wordArray.length - 1)/ 2;
    console.log("i=",i);
  }
  for(var x=0; x<i; x++){
    console.log(wordArray[x], wordArray[wordArray.length - (x + 1)])
    if (wordArray[x] === wordArray[wordArray.length - (x + 1)]){
      console.log('this was true');
      if(x === i-1){
        return true;
      }
      continue;
    }
    console.log('this was false');
    return false;
  }
}

