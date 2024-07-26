// Generate number 1 - 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Create variable
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const invalid = document.querySelector('.invalid');

// To start new game Button
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// To make on or of game
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validationGuess(guess);
  });
}

//To check the number and show message if invalid
function validationGuess(guess) {
  if (isNaN(guess)) { 
    // +++++++++ alert only work on web page ++++++
    // alert("Please Eneter a valid Number");
    invalid.innerHTML = "Please Eneter a valid Number";
  } else if (guess < 1) {
    // alert("Please Eneter a Number more then 1");
    invalid.innerHTML = "Please Eneter a Number more then 1";
  } else if (guess > 100) {
    // alert("Please Eneter a Number less then 100");
    invalid.innerHTML = "Please Eneter a Number less then 100";
  } else {
    prevGuess.push(guess);
    invalid.innerHTML = '';

    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over!, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Display message Win, high or low 
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too high`);
  }
}

// Counting and Displaying 
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// Display Messages 
function displayMessage(message) {
  lowOrHi.innerHTML = `<h3 class = 'display'>${message}</h3>`;
}

// End game and reset
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame" >Start a new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

//Start new game with butoon to restart
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `10`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMessage('');

    playGame = true;
  });
}
