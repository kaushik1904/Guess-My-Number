const secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = message => {
  document.querySelector('.message').innerHTML = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guessNumber').value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('!No Number');
  } else if (guess == secretNumber) {
    displayMessage('Currect Number');
    document.querySelector('.number').innerHTML = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    displayMessage('Too High');
  } else {
    displayMessage('Too Low');
  }
});
