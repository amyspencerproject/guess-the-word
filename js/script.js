const guessedLetters = doucment.querySelector("guessed-letters")
const guessButton = document.querySelector("guess");
const letterTextField = document.querySelector("letter");
const wordProgress = document.querySelector("word-in-progress");
const remainGuess = document.querySelector("remaining"); 
const remainGuessSpan = document.querySelector("remaining span");
const motivateMessage = document.querySelector("message");
const playAgainButton = document.querySelector("play-again");
const word = "magnolia";




document.addEventListener("keydown", function(e)) {
    const letter = e.key;
    guessedLetters = document.createElement("li");
    li.append(letter);
};




