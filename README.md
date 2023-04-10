# Guess the Word
## Table of contents

- [Overview](#overview)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview
Game that allows user to guess letters of an unknown randomly selected word.

Users should be able to:

- View the optimal layout depending on their device's screen size
- Guess letters, numbers, other keystrokes and then have a message returned about the status of that keystroke in the game. 
    - If a user makes a guess that is not valid there should be a message specific to the keystroke to them telling them what kind of guesses are accepted. 
    - If they make a incorrect guess there should be a message and an update to the number of guesses they have remaining.
    - If they make a correct guess then there should be a message congratulating them.
- See a correct guess by having the placeholder bullets updated with the correct letters.
- Easily play again with a reset button.

### Built with

- HTML/CSS
- Flexbox
- Mobile-first workflow
- Vanilla Javascript
- Used a REST API to fetch words for the game

### Resources
- Difference between REST API and just an API 
    - [Stack OverFlow Post](https://stackoverflow.com/questions/41189842/what-is-difference-between-rest-and-api)
    - [RestApp Blog Post](https://restapp.io/blog/5-key-differences-between-api-and-rest-api/)
- Regex, regular expressions [cheat sheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

### What I learned
- Using a REST API
- using just ``e`` for an event handler, ```function(e)```
- using ``e.precentDefault();`` to stop a the page from reloading everytime a user makes a input
- introduced to Regex expressions
- add placeholder bullet points and have them updated to correct letters guessed
- how to break down each small piece of what needs to happen to make the game work prior to starting to code it. Othewise the task would be overwhelming and difficult to debugg. 
    1. get a word from the database
    2. show the user placeholder bullets for the letters of the word
    3. grab the value of the guess after button is clicked
    4. validate that the guess is a single letter
    5. change the case of the guess, check it against letters already guessed, store as a guessed letter if its a fresh guess
    6. display the guessed letters
    7. change case of word and turn word sting into an array
    8. if the guess is included in the word array then display letter instead of the placehoder bullet
    9. check to see if player has won 



### Continued development
Throughout this code I used ```var``` and not ```const``` or ```let```. Using ```var``` is not a good or modern practice because ```var``` varaibles can be overwritten anywhere in your code causing huge debugging problems. The constraints put on ```const``` and ```let``` with ECMA6 prevent the overwritting issues. 

It would be interesting to expand what information could be pulled from an API to display to the user. Maybe an image or some other kind of information that corresponds to the correctly guessed word. This would be more rewarding to the user and let me practice fetching different kinds of REST API data.



## Author

- Portfolio - [Amy Spencer](https://spencerproject.com/)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)