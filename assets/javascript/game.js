
var Letters = ["a","b","c","d","e","f","g","h",
"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var Passcodes = [
"Goldfinger","Skyfall","Goldeneye", "Octopussy","Aston Martin DB5","Sean Connery", 
"Roger Moore", "You Only Live Twice", "MI6", "Shaken Not Stirred", "Moneypenny",
];


var lives = 10;  
var guessedCodes = []; 
var answerArray = []; 
var wins = 0;  
var chosenPasscode;
var wordSpace = document.getElementById("Passcodes"); 
var letterGuesses = document.getElementById("guessedCodes"); 
var guessesRemaining = document.getElementById("lives"); 
var winCount = document.getElementById("wins"); 



function startNewGame() {
 
    answerArray = [];
    guessedCodes = [];
    lives = 10;
   
    chosenPasscode = Passcodes[Math.floor(Math.random() * Passcodes.length)]
 
    for (var i = 0; i < chosenPasscode.length; i++) {
        answerArray.push("_");
        wordSpace.innerHTML = answerArray.join(" ");
    }
    
    letterGuesses.innerHTML = "Guessed Codes: " + previousGuesses;
    guessesRemaining.innerHTML = " lives:" + guessesLeft;
}

function updateWords(letter) {
    
    if (chosenPasscode.indexOf(letter) === -1 && Letters.indexOf(letter) >= 0) {
        if (guessedCodes.indexOf(letter) >= 0){
        }
        else{
        guessedCodes.push(letter);
        letterGuesses.innerHTML = "Guessed Codes: " + guessedCodes.join(", ");
        guessesLeft--;
        guessesRemaining.innerHTML = "lives: " + guessesLeft;}

    } else if (chosenPasscodes.indexOf(letter) >= 0 && Letters.indexOf(letter) >= 0) {
        for (var i = 0; i < chosenPasscodes.length; i++) {
            if (chosenPasscodes[i] === letter) {
                answerArray[i] = letter;
            }
            wordSpace.innerHTML = answerArray.join(" ")
        }
    }

}


function youWon() {
    winNumber++;
    winCount.innerHTML = "wins: " + winNumber;

}
