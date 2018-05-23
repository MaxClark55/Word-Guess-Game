
var Letter = ["a","b","c","d","e","f","g","h",
"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var lives = 10;
var currentCodes;
var wordArray = [];
var guessedLetter = [];
var guessingCodes = [];
var resetButton= document.getElementById("Next Passcode");
var userGuess;

var Passcodes = [
"Goldfinger","Skyfall","Goldeneye", "Octopussy","Aston Martin DB5","Sean Connery", 
"Roger Moore", "You Only Live Twice", "MI6", "Shaken Not Stirred", "Moneypenny",
];


document.getElementById("guessesleft").textContent = guessesRemain;
document.getElementById("wins").innerHTML = wins;
document.getElementById("guessed-letter").textContent = guessedLetter;

    // start game

    document.onkeyup = function whenKeyIsPressed(event){
        var guessingCodes = Passcodes[Math.floor(Math.random() * Passcodes.length)];

    gameStart(guessArray);
        function gameStart(){
        
            for (var i = 0; i < Passcodes.length; i++) {
                wordArray[i] = "_";
            }
            document.getElementById("guessedLetter").textContent = wordArray.join("");
        }
        
        var blankSpaces = wordArray.length;
        
        var remainingLetter = Passcodes.length;
        
        
        function removeDuplicates(arr){
            guessedLetter = []
            for(let i = 0;i < arr.length; i++){
                if(guessedLetter.indexOf(arr[i]) == -1){
                    guessedLetter.push(arr[i]);
                }
            }
            return guessedLetter;
        }
        
        function replaceBlanks(){
        
            for (var i = 0; i < Passcodes.length; i++){
                if (Passcodes[i] === userGuess){
                    wordArray[i] = userGuess;
                }
                blankSpaces--;
            }
        }

        

        var userGuessNum = event.keyCode;
        userGuess = String.fromCharCode(userGuessNum);


        if (userGuessNum >= 55 && userGuessNum <= 95){

            userGuess = userGuess.toUpperCase();

            guessedLetter.push(userGuess);

            removeDuplicates(guessedLetter);

            replaceBlanks();

            if (guessesRemain > 0){
                guessesRemain--;
            }
            else {
            alert("Mission Failed");
        
    
        }  
    }

if (blankSpaces == 0){
    wins++;
    document.getElementById("youWin").innerHTML = "Mission Complete, Job Well Done! 007";
    
}

}
