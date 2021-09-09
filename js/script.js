const guessedLetters = document.querySelector(".guessed-letters"); //unordered list for guessed letters
const guessButton = document.querySelector(".guess"); //button with the text Guess!
const letterTextField = document.querySelector(".letter"); //text input for player to guess letters
const wordProgress = document.querySelector(".word-in-progress"); //paragraph where word in progress will show
const remainGuess = document.querySelector(".remaining"); //paragraph where # of remaining guesses
const remainGuessSpan = document.querySelector(".remaining span"); //span section of # of remaining guesses paragraph
const motivateMessage = document.querySelector(".message"); //motivational message to player
const playAgainButton = document.querySelector(".play-again"); //hidden button for playing again
// let word = [];
let word = "magnolia";  //starting word to test game functionality
let guessedLettersArray = []; //Empty array where letters that have been guessed will be put
let remainingGuesses = 8;  //number of guesses allowed, makes game easy or hard

//Async function that pulls data from a text file
const getWord = async function () {
    const response = await fetch( "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const wordResponse = await response.text();
    const wordResponseArray = wordResponse.split("\n"); //turns wordResponse into an array deliminated by "/"
    const randomIndex = Math.floor( Math.random() * wordResponseArray.length ); //randomly selects word (via index) in array
    word = wordResponseArray[randomIndex].trim(); //removes spaces from word
    console.log(word);
    updateWord(word);
};
//Start game
getWord();

// Visible bullet point placeholder for letters in word to be guessed
const updateWord = function (word) {
    const placeHolder = []; //empty array
    for (const letter of word) { //loops thru each letter of the string
        placeHolder.push("●");
    }  
    wordProgress.innerText = placeHolder.join(""); 
};

// updateWord(word);


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
        return guess;
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
        guessedLettersArray.push(guess);
        dipslayGuessedLetters();
        replaceLetters (guessedLettersArray);
        //replace bullet point place holders with correct letters of word
        countRemainingGuesses(guess);
        //subract letters guessed from remaining guesses
    }
};

//Display all letters that player has guessed 
dipslayGuessedLetters = function () {
    guessedLetters.innerHTML = "";
    for (const letter of guessedLettersArray) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLetters.append(li);
    }
};


//Display all correct letters that player has guessed replacing the placeholder bullet point
const replaceLetters = function(guessedLettersArray) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const displayWord = [];
    // console.log(wordArray);
    for (const letter of wordArray) {
        if (guessedLettersArray.includes(letter)) {
            displayWord.push(letter.toUpperCase());
        } else {
            displayWord.push("●");
        }
    }
    wordProgress.innerText = displayWord.join("");
    // checkWin();
};

const countRemainingGuesses = function (guess) {   
    const upperWord = word.toUpperCase(); //make the word uppercase to match guessed letter case
    if (!upperWord.includes(guess)) {
        motivateMessage.innerText = `Sorry ${guess} is not correct.`;
        remainingGuesses -= 1 ; 
    } else {
        motivateMessage.innerText = `Excellent choice, ${guess} is correct!`;
        checkWin();
    } 
    
    if (remainingGuesses === 0) {
        motivateMessage.innerHTML = `Sorry game over! The word was <span class="highlight">${word}</span>`;
        startOver();
    } else if (remainingGuesses === 1) {
        remainGuessSpan.innerText = `${remainingGuesses} guess`;
    } else {
        remainGuessSpan.innerText = `${remainingGuesses} guesses`;
    }
};

const checkWin = function () {
    if (word.toUpperCase() === wordProgress.innerText) {
        motivateMessage.classList.add("win");
        motivateMessage.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;

        startOver();
    }
};

const startOver = function () {
    guessButton.classList.add("hide");
    guessedLetters.classList.add("hide");
    remainGuess.classList.add("hide");
    playAgainButton.classList.remove("hide");
};

playAgainButton.addEventListener("click", function() {
    motivateMessage.classList.remove("win");
    remainingGuesses = 8;
    remainGuessSpan.innerText = `${remainingGuesses} guesses`; //reset guesses counter for user
    guessedLettersArray = []; //clear guessed letters
    guessedLetters.innerHTML = ""; //clear guessed letters from unordered list
    motivateMessage.innerText = ""; //reset message
    // get a new word
    getWord();

    //Restore all the elements for user to play game again
    guessButton.classList.remove("hide");
    guessedLetters.classList.remove("hide");
    remainGuess.classList.remove("hide");
    playAgainButton.classList.add("hide");
});

