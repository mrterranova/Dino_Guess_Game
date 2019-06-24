    //My Global Variables
    var instruments = ["PIANO", "FLUTE", "VIOLIN", "DRUM", "LYRE", "TRUMPET", "GONG", "SITAR", "ACCORDIAN", "HARMONICA", "XYLOPHONE", "MARACAS"];
    var lives = 0;
    var correctGuesses = [];
    var incorrectGuesses = [];
    var wins =0;
    var losses =0;
    var randomInst;
    var strCorGuesses="";

    //Starting the Hangman Game
    function startGame(){
        lives = 0;
        correctGuesses =[];
        incorrectGuesses = [];
        
        //Pick from array a random word
        randomInst = instruments[Math.floor(Math.random() * instruments.length)];
        console.log(randomInst);


        //Populate the spaces with blanks
        for(var i = 0; i < randomInst.length; i++){
            correctGuesses[i] = "_ ";
        }

        //make changes to show on the HTML 
        document.getElementById("wordToGuess").innerHTML = correctGuesses.join(" ");
        document.getElementById("numGuesses").innerHTML = lives;
        //SSSdocument.getElementById("wrongGuesses").innerHTML = incorrectGuesses;
        
    }
    
    
    
    function gamePlay (userLetter){
    
    //game play
    while (lives < 6) {
        alert (userLetter);
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
            lives++;
            incorrectGuesses.push(userLetter);
        }

        else if (str === randomInst) {
            break;
        }
    }



    if (str === randomInst) {
        wins++;
        document.getElementById("winCounter");
        startGame();
    } else {
        losses++;
        document.getElementById("lossesCounter");
        startGame();
    }

    }


//functions
startGame();



document.onkeyup = function(event) { 
    var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
    gamePlay(letterGuessed);
    console.log(letterGuessed);
 }