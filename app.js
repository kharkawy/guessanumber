//Game:
//1. generate random number +
//2. read player's input
//3. compare player's guess with generated number: +
//   - if lower than generated number, display that it's lower +
//   - if higher than generated number, display that it's higher +
//   - if the same, display that you guessed +
//4. Update amount of tries
//5. Add the last guess to guesses panel
//6. If you guessed, disable guess button

var randomNumber;
var playerGuess;
var isGamePlaying;

var guessInput = document.getElementById("guess-input");
var guessButton = document.getElementById("guess-btn");
var guessResult = document.getElementById("guess-result");

guessButton.addEventListener("click", function() {
  if (isGamePlaying) {
    playerGuess = guessInput.value;
    compareNumbers();
  }
});

function startGame() {
  isGamePlaying = true;
  generateNumber();
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
    isGamePlaying = false;
  }
}

startGame();
