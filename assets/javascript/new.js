    //Global variables
    var instruments = ["PIANO", "FLUTE", "VIOLIN", "DRUM", "LYRE", "TRUMPET", "GONG", "SITAR", "ACCORDIAN", "HARMONICA", "XYLOPHONE", "MARACAS"];
    var lives = 6;
    var correctGuesses = [];
    var incorrectGuesses = [];
    var wins =0;
    var losses =0;
    var randomInst;
    var strCorGuesses="";
    var word;

    function startGame(){
        lives = 6;
        correctGuesses =[];
        incorrectGuesses = [];
        
        randomInst = instruments[Math.floor(Math.random() * instruments.length)];
        console.log(randomInst);

        for(var i = 0; i < randomInst.length; i++){
            correctGuesses[i] = "_ ";
        }

        document.getElementById("wordToGuess").innerHTML = correctGuesses.join(" ");
        document.getElementById("winCounter").innerHTML = wins;
        document.getElementById("lossCounter").innerHTML = losses;
        console.log(lives);
        console.log(losses);
        console.log(wins);
        
    }
    
    function gamePlay (userGuess){
        
        //game play
            document.getElementById("numGuesses").innerHTML = lives;
            
            var userLetter = userGuess.charAt().toUpperCase();
        var userLetterisInWord = false;
        
        for (var i = 0; i <randomInst.length; i++) {
            
            if (randomInst[i] === userLetter){
                correctGuesses[i] = userLetter;
                userLetterisInWord = true;
                console.log(correctGuesses[i] + " " + i);
            }
        }
        word = correctGuesses.join("");
        
        if (!userLetterisInWord) {
            lives--;
            incorrectGuesses.push(userLetter);
        }
        
        else if (word === randomInst) {
            break;
        }
        
        document.getElementById("wrongGuesses").innerHTML = incorrectGuesses.join(" ");
        console.log(incorrectGuesses);
    }

    //determine whether player has won or has lost game
    if (word === randomInst) {
        wins++;
        startGame();
    } else {
        losses++;
        startGame();
    }

//functions
startGame();

    document.onkeyup = function(event) { 
        var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
        gamePlay(letterGuessed);
        console.log(letterGuessed);
     }
