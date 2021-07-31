'use strict';

// Initial values
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.score').textContent = score;

// Reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Decrementing score only when score is 1 or higher
const changingScore = function () {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score === 1) {
    score--;
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent =
      'Game Over! You lost the game...';
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // If guess number input is empty or not between 1 and 20
  if (!guessNumber || guessNumber > 20) {
    document.querySelector('.message').textContent =
      'Please enter a number between 1 and 20';

    // If guess number is the secret number
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent =
      'Correct! You won the game :D';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // If score still higher than 1
  } else if (score > 1) {
    // If guess number higher than secret number
    if (guessNumber > secretNumber) {
      document.querySelector('.message').textContent =
        'You entered a higher number!';
      changingScore();

      // If guess number lower than secret number
    } else if (guessNumber < secretNumber) {
      document.querySelector('.message').textContent =
        'You entered a lower number!';
      changingScore();
    }
    // If score is 1
  } else if (score === 1) {
    changingScore();
  }
});
