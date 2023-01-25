/* Generates a random number between 1 and 10 */
function randomEasy() {
    return Math.floor((Math.random() * 10) + 1);
  }

/* Generates a random number between 1 and 50 */
function randomMedium() {
    return Math.floor((Math.random() * 50) + 1);
  }

/* Generates a random number between 1 and 100 */
function randomHard() {
    return Math.floor((Math.random() * 100) + 1);
  }

/* Initial prompt asking for the number */
function init() {

    let difficulty = prompt("Choose a difficulty: Easy, Medium, or Hard ( E, M, or H )");
    if (difficulty == 'E' | difficulty == 'e') {
        easyGame();
    } else if (difficulty == 'M' | difficulty == 'm') {
        medGame();
    } else if (difficulty == 'H' | difficulty == 'h') {
        hardGame();
    } else {
        alert('Sorry, that is not a valid input');
        init();
    }
}

/* Prompts user to play again */
function playAgain() {

    let play = prompt('Would you like to play again? Y or N');

    if (play == 'Y' | play == 'y') {
        // Resets variables for a new game and invokes init() to restart the game
        count = 1;
        guesses = [];
        randEasy = randomEasy();
        randMed = randomMedium();
        randHard = randomHard();
        init();
    } else if (play == 'N' | play == 'n') {
        alert('Thanks for playing!');
    } else {
        alert('Sorry, that is not a valid input');
        playAgain();
    }
}

function easyGame() {

    let num = prompt('Enter a number between 1 and 10');
    parseInt(num);
    console.log(num);
    if (num < 1 | num > 10) {
        alert('Hey! You chose easy mode, stay between 1 and 10');
        easyGame();
    } else if (num < 10 & num > randEasy) {
        alert('Too high, try again');
        guesses.push(num);
        count += 1
        easyGame();
    } else if (num > 1 & num < randEasy) {
        alert('Too low, try again');
        guesses.push(num);
        count += 1
        easyGame();
    } else {
        if (count == 1) {
            alert(`You win ${player}! It only took you ${count} guess, you should probably hit up a casino!`);
            playAgain();
        } else {
            alert(`Good job ${player}! You guessed ${count} times, and your previous guesses were ${guesses}`);
            playAgain();
        }
    }
}

function medGame() {

    let num = prompt('Enter a number between 1 and 50');
    parseInt(num);
    console.log(num);
    if (num < 1 | num > 50) {
        alert('Hey! You chose medium mode, stay between 1 and 50');
        medGame();
    } else if (num < 50 & num > randMed) {
        alert('Too high, try again');
        guesses.push(num);
        count += 1
        medGame();
    } else if (num > 1 & num < randMed) {
        alert('Too low, try again');
        guesses.push(num);
        count += 1
        medGame();
    } else {
        if (count == 1) {
            alert(`You win ${player}! It only took you ${count} guess, you should probably hit up a casino!`);
            playAgain();
        } else {
            alert(`Good job ${player}! You guessed ${count} times, and your previous guesses were ${guesses}`);
            playAgain();
        }
    }
}

function hardGame() {

    let num = prompt('Enter a number between 1 and 100');
    parseInt(num);
    console.log(num);
    if (num < 1 | num > 100) {
        alert('Hey! You chose hard mode, stay between 1 and 100');
        hardGame();
    } else if (num < 10 & num > randHard) {
        alert('Too high, try again');
        guesses.push(num);
        count += 1
        hardGame();
    } else if (num > 1 & num < randHard) {
        alert('Too low, try again');
        guesses.push(num);
        count += 1
        hardGame();
    } else {
        if (count == 1) {
            alert(`You win ${player}! It only took you ${count} guess, you should probably hit up a casino!`);
            playAgain();
        } else {
            alert(`Good job ${player}! You guessed ${count} times, and your previous guesses were ${guesses}`);
            playAgain();
        }
    }
}

var count = 1
var guesses = []
var randEasy = randomEasy()
var randMed = randomMedium()
var randHard = randomHard()
const player = prompt('Hey you!  What should we call you?')

init()