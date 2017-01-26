/*
  Shakesperian Insult Generator

  You saucy, fly-bitten, minnow, you! Randomly generate some zingers using the supplied list of words!

  Bonuses:
  - Encapsulate your logic in a `generateInsult` function
  - Randomly generate 1 word, 2 word, and n word insults.
  - Generate any number of insults, depending on a user supplied integer. (e.g. generateInsults(3) )
  - Allow the user to supply a proper name as an input. ("Why Justin, you villainous toad-spotted strumpet!").
  - Create a browser interface, using some combination of `prompt`, `alert`, and/or DOM manipulation.

*/

function generateInsult(){
var rand1 = first_word[Math.floor(Math.random() * first_word.length)];
var rand2 = second_word[Math.floor(Math.random() * second_word.length)];
var rand3 = third_word[Math.floor(Math.random() * third_word.length)];

console.log(rand1 + " " + rand2 + " " + rand3);
}
generateInsult()
