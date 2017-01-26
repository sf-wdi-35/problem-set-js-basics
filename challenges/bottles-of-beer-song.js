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

var bottlesOfBeer = function(bottles) {

    while (bottles >= 0) {

        if (bottles === 0) {
            console.log("No more bottles of beer on the wall, No more bottles of beer! Head to the store and buy some more, No more bottles of beer on the wall!")
        } else if (bottles === 1) {
            console.log(bottles + " bottle of beer on the wall, " +
                        bottles + " bottle of beer! Take one down and pass it around, " +
                        "No more bottles of beer on the wall!")
        } else {
            console.log(bottles + " bottles of beer on the wall, " +
                        bottles + " bottles of beer! Take one down and pass it around, " +
                        (bottles - 1) + " bottles of beer on the wall!")
        }
        bottles--;
    }
}

bottlesOfBeer(34);
