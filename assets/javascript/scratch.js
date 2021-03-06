var dinosaurs = ["COMPSOGNATHUS", "GALLIMIMUS", "SARCOSUCHUS", "CERATOSAURUS", "ELASMOSAURUS", "STYRACOSAURUS", "STYGIMOLOCH", "TROODON", "QUETZALCOATLUS", "BARYONYX", "PACHYCEPHALOSAURUS", "IGUANODON"];

var hints = ["<li>Name means: Pretty Jaw.</li><li>Length of adult is 0.65m.</li><li>Ran on two legs.</li><li>Carnivore. </li><li>Lived in the late Jurassic.</li>",
"<li>Name means: Chicken Mimic.</li><li>Length of adult is 1.9m tall at hip.</li><li>Ran on two legs. </li><li>Carnivore.</li><li>Lived in late Cretaceous.</li>",
"<li>Name means: Flesh Crocodile.</li><li>Length of adult is 11-12m.</li><li>Swam and walked on four legs.</li><li>Carnivore.</li><li>Lived in Cretaceous.</li>",
"<li>Name means: Horned Lizard.</li><li>Length of adult is 5-6m.</li><li>Ran on two legs. </li><li>Carnivore.</li><li>Lived in Jurassic.</li>",
"<li>Name means: Thin Plate Lizard.</li><li>Length of adult is 10m.</li><li>Swam with four flippers.</li><li>Carnivore.</li><li>Lived in late Cretaceous.</li>",
"<li>Name means: Pointed Lizard.</li><li>Length of adult is 5.5m.</li><li>Ran on four legs.</li><li>Herbivore.</li><li>Lived in Late Cretaceous.</li>",
"<li>Name means: Demon from the river Styx.</li><li>Length of adult is 2-3m.</li><li>Ran on two legs.</li><li>Herbivore.</li><li>Lived in late Cretaceous.</li>",
"<li>Name means: Wounding Tooth.</li><li>Length of adult is 2-3.5m.</li><li>Ran on two legs.</li><li>Carnivore.</li><li>Lived in Late Cretaceous.</li>",
"<li>Name means: Feathered Serpent.</li><li>Length of adult is 10-11m.</li><li>Flew in sky.</li><li>Carnivore.</li><li>Lived in late Cretaceous.</li>",
"<li>Name means: Heavy Claw.</li><li>Length of adult is 7.5-10m.</li><li>Ran on two legs.</li><li>Carnivore.</li><li>Lived in early Cretaceous.</li>",
"<li>Name means: Thick-Headed Lizard.</li><li>Length of adult is 4.5m.</li><li>Ran on two legs.</li><li>Herbivore.</li><li>Live in late Cretaceous.</li>",
"<li>Name means: Iguana Tooth.</li><li>Length of adult is 6-10m.</li><li>Ran on two legs.</li><li>Herbivore.</li><li>Lived in Cretaceous.</li>"];

var images = ["composognathus.png", "GALLIMIMUS.png", "SARCOSUCHUS.png","CERATOSAURUS.png","ELASMOSAURUS.png","STYRACOSAURUS.png","STYGIMOLOCH.png","TROODON.png","QUETZALCOATLUS.png","BARYONYX.png","PACHYCEPHALOSAURUS.png","IGUANADON.png"];

var s = "";
var lettersinWord = "";
var num = 0;
var blanks = [];
var wrong = [];
var pictures=[];

var winCount = 0;
var lossCount = 0;
var guesses = 9; 
var hintTime = 0;
var image = null;

//------------------------------------------

function startGame(){
    
    s = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
    lettersinWord = s.split("");
    num = lettersinWord.length;

    //reset
    guesses = 9;
    wrong = [];
    blanks = [];
    hintTime = 0;
    loc = 0;
    image=null;

    //populate 
    for (var i = 0; i < num; i++){
        blanks.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanks.join(" ");
    document.getElementById("numGuesses").innerHTML = guesses; 
    document.getElementById("winCounter").innerHTML = winCount; 
    document.getElementById("lossCounter").innerHTML = lossCount;

    // resetImages();

    // function resetImages() {
    //     var image2 = document.getElementsByClassName("background");
    // document.querySelector(".background").setAttribute("class", "background");

    // var x = document.getElementById("hints");
    // x.style.display = "none";

    // y = document.getElementById("img");
    // y.style.display = "none";
    // };
    

}


function checkLetters(letter) {

    //determine whether user is typing a letter only
    if (letter >= "A" && letter <="Z") {
        console.log("hello");
        

        var isLetterInWord = false; 

        for(var i = 0; i < num; i++) { 
            if (s[i] === letter){
                isLetterInWord = true; 

            }
        }

        if(isLetterInWord){
            for (var i = 0; i < num; i++){
                if (s[i] === letter){
                    blanks[i] = letter; 
                }
            }
            hintTime ++;
        }

        else { 
            var isAlreadyThere = false;
            for (var i = 0; i < wrong.length; i++){

                if (wrong[i] === letter){
                    
                    isAlreadyThere = true;
                }  
           }

           if (!isAlreadyThere) {
                wrong.push(letter);
                guesses--;  
           }

        }
    } 
}

function roundComplete(){ 

    document.getElementById("wordToGuess").innerHTML = blanks.join(" ");
    document.getElementById("numGuesses").innerHTML = guesses;

    document.getElementById("wrongGuesses").innerHTML = wrong.join(" ");
   
   
    //reward player for correct answers!
        var loc = dinosaurs.indexOf(s);
        document.getElementById('hints').innerHTML = hints[loc];
        console.log(" This does work: " + hints[loc]);

    if (guesses === 3){
        //shaking on the Screen
        var image = document.getElementsByClassName("background");
        document.querySelector(".background").setAttribute("class", "meteor");
    }

    
    //check if user won or lost
    if (lettersinWord === blanks.toString()) {

        //Score win point
        winCount++; 

        document.getElementById("winCounter").innerHTML = winCount; 

        //Show image of the dinosaur upon win
        var image = document.getElementById('img');
        var pics = dinosaurs.indexOf(s);
        image.src= "assets/images/"+images[pics];

        //<source src="assets/images/Trex31.wav" type="audio/wav"></source>

        startGame();

    }
    else if (guesses === 0){
        lossCount++;
        document.getElementById("lossCounter").innerHTML = lossCount;
        wrong = [];

        //darken screen by switching the attributes
        var image = document.getElementsByClassName("background");
        document.querySelector(".background").setAttribute("class", "lost");
       
        //<source src="assets/images/Thunder.mp3" type="audio/mp3"></source>

        startGame();
    }
}

startGame();
    //reset image

document.onkeyup = function(event) { 
    var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
    checkLetters(letterGuessed);
    console.log(letterGuessed);
    roundComplete();
    console.log(wrong);
 }



