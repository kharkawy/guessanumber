// TO DO: fix input validation for strings - input should take numbers only, not letters

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

  if (isInputValid) {
    compareNumbers();
    updatePreviousGuesses(playerGuess);
    updateTries();
    guessInput.value = "";
  }
});

newGameButton.addEventListener("click", function() {
  startGame();
});

function startGame() {
  generateNumber();
  playerGuess = "";
  amountOfTries = 0;
  triesSpan.innerHTML = amountOfTries;
  previousGuessesDiv.innerHTML = "";
  guessResult.innerHTML = "";
  guessInput.value = "";
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
  } else if (inputValue < 0 || inputValue > 100) {
    inputLabel.innerHTML = "Please input only numbers between 0 and 100";
    isInputValid = false;
  } else {
    inputLabel.innerHTML = "";
    isInputValid = true;
  }
}
startGame();
