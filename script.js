'use strict';

// GUESSS MY NUMBER GAME ------------------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeSecretWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

// CHECK BUTTON FUNCTIONALITY
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('🛑 No number!');

    //  When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    changeBgColor('#60b347');
    changeSecretWidth('30rem');

    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    //  When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

// AGAIN BUTTON FUNCTIONALITY
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  changeBgColor('#222');
  changeSecretWidth('15rem');
  document.querySelector('.guess').value = '';
});

// RESET HIGHSCORE BUTTON FUNCTIONALITY
document.querySelector('.reset').addEventListener('click', function () {
  highScore = 0;
  displayHighScore(highScore);
});
