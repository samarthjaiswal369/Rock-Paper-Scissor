var rounds = 0;
var streak = 0;
var history = [];

function play(userChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var compChoice = choices[Math.floor(Math.random() * 3)];

  var result;

  if (userChoice === compChoice) {
    result = 'Draw';
    streak = 0;
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    result = 'You Win!';
    streak = streak + 1;
  } else {
    result = 'You Lose!';
    streak = 0;
  }

  rounds = rounds + 1;

  history.push('Round ' + rounds + ': You picked ' + userChoice + ', Computer picked ' + compChoice + ' — ' + result);

  document.getElementById('userChoice').innerText = userChoice;
  document.getElementById('compChoice').innerText = compChoice;
  document.getElementById('result').innerText = result;
  document.getElementById('rounds').innerText = rounds;
  document.getElementById('streak').innerText = streak;

  var list = document.getElementById('historyList');
  var item = document.createElement('li');
  item.innerText = history[history.length - 1];
  list.appendChild(item);
}

function resetGame() {
  rounds = 0;
  streak = 0;
  history = [];

  document.getElementById('userChoice').innerText = '-';
  document.getElementById('compChoice').innerText = '-';
  document.getElementById('result').innerText = '-';
  document.getElementById('rounds').innerText = '0';
  document.getElementById('streak').innerText = '0';
  document.getElementById('historyList').innerHTML = '';
}
