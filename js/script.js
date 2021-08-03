const guessedLetters = document.querySelector(".guessed-letters"); //unordered list for guessed letters
const guessButton = document.querySelector(".guess"); //button with the text Guess!
const letterTextField = document.querySelector(".letter"); //text input for player to guess letters
const wordProgress = document.querySelector(".word-in-progress"); //paragraph where word in progress will show
const remainGuess = document.querySelector(".remaining"); //paragraph where # of remaining guesses
const remainGuessSpan = document.querySelector(".remaining span"); //span section of # of remaining guesses paragraph
const motivateMessage = document.querySelector(".message"); //motivational message to player
const playAgainButton = document.querySelector(".play-again"); //hidden button for playing again

//starting word to test game functionality
const word = "magnolia";  

// Visible bullet point placeholder for letters in word (note word is a fixed right now as "magnolia")
const updateWord = function (word) {
    const placeHolder = []; //empty array
    for (const letter of word) { //loops thru each letter of the string
        placeHolder.push("●");
        // console.log(letter);
    }  
    wordProgress.innerText = placeHolder.join(""); 
};

updateWord(word);



guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const letterGuess = letterTextField.value;
    //guessedLetters = document.createElement("li");
    //li.append(letterGuess);
    console.log (letterGuess);
    letterTextField.value = "";
});



