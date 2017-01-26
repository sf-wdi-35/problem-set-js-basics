/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
//
console.log("bottles-of-beer-song.js loaded");
var bottles = "bottles";

while (userChoice > 0) {
  var userChoice = prompt("how many bottles of beer on the wall?");

  console.log(userChoice + " " + bottles + " of beer on the wall,");
  console.log(userChoice + " "  + bottles + " of beer");
  console.log("Take one down and pass it around,");
  userChoice = userChoice - 1;
  if (userChoice === 1 ) {
    bottles = "bottle";
  }

  if (userChoice === 0) {
    console.log("No more bottles of beer on the wall");
  } else {
    console.log(userChoice + " " + bottles + " of beer on the wall!");
  }
}
