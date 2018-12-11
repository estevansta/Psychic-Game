// Variables //

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

// onkey evenet //

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    // if statements //

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
        }

        if (userGuess != computerGuess) {
            numGuesses --;
            guessChoices.push(userGuess);
        }

        if (numGuesses === 0) {

            numGuesses = 9;
            losses ++;
            guessChoices = [];

            
        }



    }


}
console.log(computerChoices, wins, losses);

//console log test//

// console.log(wins, losses, numGuesses);