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
console.log("sing.js loaded");

do {
  var numBottles = parseInt(prompt("How many bottles of beer are on the wall?"));
  console.log(numBottles);
}
while (isNaN(numBottles) || numBottles<=0);

while (numBottles > 0){
  if (numBottles > 2){
    console.log(numBottles + " bottles of beer on the wall,");
    console.log(numBottles + " bottles of beer!");
    console.log("Take one down and pass it around,");
    while (numBottles > 2){
      console.log(numBottles + " bottles of beer on the wall,");
      console.log(numBottles + " bottles of beer!");
      console.log("Take one down and pass it around,");
      numBottles --;
      console.log(numBottles + " bottles of beer on the wall!");
      }
  } else if (numBottles === 2){
    console.log(numBottles + " bottles of beer on the wall,");
    console.log(numBottles + " bottles of beer!");
    console.log("Take one down and pass it around,");
    numBottles --;
    console.log(numBottles + " bottle of beer on the wall!")
  } else if (numBottles === 1){
      console.log(numBottles + " bottle of beer on the wall,");
      console.log(numBottles + " bottle of beer!");
      console.log("Take one down and pass it around,");
      console.log("No bottles of beer on the wall!")
      numBottles--;
    }
};
