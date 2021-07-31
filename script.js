'use strict';

// Initial values
let score = 20;
let highScore = 0;
let guessNumber = '';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Checking player won / changing score
const gameFunc = function (message) {
  displayMessage(message);

  if (guessNumber === secretNumber) {
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    score--;
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  guessNumber = Number(document.querySelector('.guess').value);

  // If guess number is not between 1 and 20
  if (!guessNumber || guessNumber > 20) {
    displayMessage('⛔️ Please enter a number between 1 and 20');

    // If guess number is correct
  } else if (guessNumber === secretNumber) {
    gameFunc('🎉 Correct! You won the game :D');

    // If guess number is wrong
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      gameFunc(
        guessNumber > secretNumber
          ? '📈 You entered a higher number!'
          : '📉 You entered a lower number!'
      );
    } else if (score === 1) {
      gameFunc('💥 Game Over! You lost the game...');
    }
  }
});

// Reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
