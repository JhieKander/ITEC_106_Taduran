const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = 'Invalid input: Please input a number between 1 and 10.';
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `Congratulations! You've guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
  } else if (guess < randomNumber) {
    message.textContent = 'Too low. Try again.';
  } else {
    message.textContent = 'Too high. Try again.';
  }

  guessInput.value = '';
}
