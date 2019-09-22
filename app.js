//Game:
//1. generate random number +
//2. read player's input
//3. compare player's guess with generated number: +
//   - if lower than generated number, display that it's lower +
//   - if higher than generated number, display that it's higher +
//   - if the same, display that you guessed +
//4. Update amount of tries +
//5. Add the last guess to guesses panel +
//6. If you guessed, disable guess button +
//7. Make a new game function(reset input!)
//8. Add input validation +

var randomNumber;
var playerGuess;
var amountOfTries;
var isInputValid;

var guessInput = document.getElementById("guess-input");
var guessButton = document.getElementById("guess-btn");
var guessResult = document.getElementById("guess-result");
var newGameButton = document.getElementById("new-game-btn");
var triesSpan = document.getElementById("tries");
var previousGuessesDiv = document.getElementById("previous-guesses");
var inputLabel = document.getElementById("guess-label");

guessButton.addEventListener("click", function() {
  playerGuess = guessInput.value;
  validateInput(playerGuess);
  //if validInput is true

  if (isInputValid) {
    compareNumbers();
    updatePreviousGuesses(playerGuess);
    updateTries();
  }
});

newGameButton.addEventListener("click", function() {
  startGame();
});

function startGame() {
  generateNumber();
  amountOfTries = 0;
  triesSpan.innerHTML = amountOfTries;
  previousGuessesDiv.innerHTML = "";
  guessResult.innerHTML = "";
}

function generateNumber() {
  randomNumber = Math.floor(Math.random() * 101);
  console.log(randomNumber);
}

function compareNumbers() {
  var player = playerGuess;
  var computer = randomNumber;

  if (player > computer) {
    guessResult.innerHTML = player + " is too high!";
  } else if (player < computer) {
    guessResult.innerHTML = player + " is too low!";
  } else if (player == computer) {
    guessResult.innerHTML = "It's " + player + "! You guessed!";
    gameOver();
  }
}

function updatePreviousGuesses(guess) {
  var newPreviousGuess = document.createElement("span");
  newPreviousGuess.innerHTML = guess;
  previousGuessesDiv.appendChild(newPreviousGuess);
}

function updateTries() {
  amountOfTries++;
  triesSpan.innerHTML = amountOfTries;
}

function gameOver() {
  guessButton.classList.add("inactive");
  newGameButton.classList.remove("inactive");
}

function validateInput(inputValue) {
  if (inputValue.match(/^[A-Za-z]+$/)) {
    inputLabel.innerHTML = "Please input only numbers between 0 and 100";
    isInputValid = false;
    console.log(1);
  } else if (inputValue < 0 || inputValue > 100) {
    inputLabel.innerHTML = "Please input only numbers between 0 and 100";
    isInputValid = false;
    console.log(2);
  } else {
    inputLabel.innerHTML = "";
    isInputValid = true;
  }

  console.log(isInputValid);
}
startGame();
