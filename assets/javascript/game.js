var a = 0;
  
var instruments = ["PIANO", "FLUTE", "VIOLIN", "DRUM", "LYRE", "TRUMPET", "GONG", "SITAR", "ACCORDIAN"];
var correctGuesses = [];
var incorrectGuesses = [];

//randomize songs
var randomInst = instruments[Math.floor(Math.random() * instruments.length)];
console.log(randomInst);

//now put letters of random song into an array
var pickedInst = [];
var userGuess;

//why isn't this working?
while (a < 6) {
  userGuess = prompt("Please pick a letter: ");
  var userLetter = userGuess.charAt().toUpperCase(); 
  for (var i = 0; i <randomInst.length; i++) {
		pickedInst[i] = randomInst.charAt(i);
		if (pickedInst[i] === userLetter){
          correctGuesses[i] = userLetter;
            console.log(correctGuesses[i] + " " + i);
		} else {
              incorrectGuesses.push(userLetter);
              var unique = [...new Set(incorrectGuesses)];
              a++;
      }
  }
}

unique = unique.filter( function( el ) {
   return !correctGuesses.includes( el );
});

console.log("g: " + correctGuesses);
console.log("b: " + unique);




//THIS WORKS
  if (correctGuesses === pickedInst) {
      console.log("You win!")
  } else {
      console.log("Maybe next time...")
  }