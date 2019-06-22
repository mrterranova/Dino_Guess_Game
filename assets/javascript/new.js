    //Global variables
    var instruments = ["PIANO", "FLUTE", "VIOLIN", "DRUM", "LYRE", "TRUMPET", "GONG", "SITAR", "ACCORDIAN", "HARMONICA", "XYLOPHONE", "MARACAS"];
    var lives = 6;
    var correctGuesses = [];
    var incorrectGuesses = [];
    var wins =0;
    var losses =0;
    var randomInst;
    var strCorGuesses="";

    function startGame(){
        lives = 6;
        correctGuesses =[];
        incorrectGuesses = [];
        
        randomInst = instruments[Math.floor(Math.random() * instruments.length)];
        console.log(randomInst);

        for(var i = 0; i < randomInst.length; i++){
            correctGuesses[i] = "_ ";
        }

        strCorGuesses = correctGuesses.join("");
        console.log(strCorGuesses);
        gamePlay();
    }
    
    function gamePlay (){
    
    var userGuess;
    
    //game play
    while (lives > 0) {
        userGuess = prompt("Please pick a letter: ");
        console.log("after prompt!");

        var userLetter = userGuess.charAt().toUpperCase();
        var userLetterisInWord = false;

        for (var i = 0; i <randomInst.length; i++) {
            
            if (randomInst[i] === userLetter){
                correctGuesses[i] = userLetter;
                userLetterisInWord = true;
                console.log(correctGuesses[i] + " " + i);
            }
        }
        var str = correctGuesses.join("");
        
        if (!userLetterisInWord) {
            lives--;
            incorrectGuesses.push(userLetter);
        }

        else if (str === randomInst) {
            break;
        }
    }

    if (str === randomInst) {
        wins++;
        startGame();
    } else {
        losses++;
        startGame();
    }
    console.log("Losses: " + losses);
    console.log("Wins: " + wins);
}

//functions
startGame();
