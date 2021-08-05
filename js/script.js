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

const guessedLettersArray = []; //Empty array where letters that have been guessed will be put

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


//Event listener for Guess! button
guessButton.addEventListener("click", function(e) {
    e.preventDefault(); //prevents the entire page from reloading everytime a guess is made by player
    motivateMessage.innerText = ""; // clears previous motivate message

    const guess = letterTextField.value; //grabs value from text imput field
    // console.log(guess);

    const validGuess = inputValidator(guess); //call the function that validates the letter guessed

    if (validGuess) {
        makeGuess(guess);
    }
    letterTextField.value = ""; // clears the text input field
});

//Validating the text input of the letter guessed by player
// Solution code used input in place of guess???
const inputValidator = function (guess) {
    const acceptedLetter = /[a-zA-Z]/;

    if (guess.length === 0) {
        motivateMessage.innerText = "Please guess a letter A thru Z!";

    } else if (guess.length >1) {
        motivateMessage.innerText = "Only one letter at a time!";

    } else if (!guess.match(acceptedLetter)) {
        motivateMessage.innerText = "Letters only for this game. Try again!"

    } else {
        return  guess;
    }
};


//Transform valid guess input into all caps and add to array of guessed letters. Ensure no duplicate letters
//Solution code uses guess as parameter. I have tried validGuess as well but still not functioning
const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    // console.log(guess);

    if (guessedLettersArray.includes(guess)) {
        motivateMessage.innerText = "You already guessed that letter. Try again!";

    } else {
        // motivateMessage.innerText = "Good guess!";
        guessedLettersArray.push(guess);
        console.log(guessedLettersArray);
    }
    // console.log(guessLettersArray);
};




//CHICKEN SCRATCH
//guessedLetters = document.createElement("li");
    //li.append(letterGuess);

    // for (letter of guessedLetters)

// if guess === guessedLetters

// makeGuess(validGuess);



