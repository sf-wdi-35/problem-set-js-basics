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

function beerBottles(){
  var x = prompt("How many verses would you like to hear?");
  
  for(var i = x; i > 0; i--){
    var y = i - 1;
    if(i == 1){
      console.log( i + " bottle of beer on the wall, "+ i +" bottle of beer! Take one down and pass it around, No more bottles of beer on the wall!");
      break;
    }
    console.log( i + " bottles of beer on the wall, "+ i +" bottles of beer! Take one down and pass it around, " + y + " bottles of beer on the wall!");
  }
}